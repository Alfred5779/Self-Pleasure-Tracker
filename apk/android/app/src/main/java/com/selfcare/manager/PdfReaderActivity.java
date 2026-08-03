package com.selfcare.manager;

import android.app.Activity;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.pdf.PdfRenderer;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.ParcelFileDescriptor;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.SeekBar;
import android.widget.TextView;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class PdfReaderActivity extends Activity {

    private PdfRenderer renderer;
    private ParcelFileDescriptor fd;
    private int totalPages;
    private int currentPage = 0;
    private boolean scrollMode = true;

    // UI
    private TextView titleText, pageInfo, pageTotal;
    private SeekBar seekbar;
    private ImageButton btnMode;
    private FrameLayout contentArea;
    private View toolbar, bottomBar;
    private Handler handler;

    // 滚动模式
    private ScrollView scrollView;
    private LinearLayout pagesContainer;
    private View[] pageSlots;     // 每页占位 View（固定高度）
    private int[] pageTops;       // 每页顶部 Y 坐标
    private int[] pageHeights;    // 每页实际像素高度
    private int totalContentH = 0;
    private int screenWidth = 0;
    private final Map<Integer, ImageView> visiblePageViews = new HashMap<>();
    private boolean seekbarDragging = false;

    // 翻页模式
    private ImageView swipeImageView;
    private Bitmap swipeBitmap;

    private String pdfPathKey; // 用于 SharedPreferences 存储阅读进度

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            setContentView(R.layout.activity_pdf_reader);
        } catch (Exception e) { e.printStackTrace(); finish(); return; }

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        enterImmersive();

        String pdfPath = getIntent().getStringExtra("pdfPath");
        String title = getIntent().getStringExtra("title");
        int lastPage = getIntent().getIntExtra("lastPage", 0);
        pdfPathKey = pdfPath; // 保存用于 onDestroy
        if (pdfPath == null) { finish(); return; }

        try {
            File file = new File(getCacheDir(), pdfPath);
            if (!file.exists()) { finish(); return; }
            fd = ParcelFileDescriptor.open(file, ParcelFileDescriptor.MODE_READ_ONLY);
            renderer = new PdfRenderer(fd);
            totalPages = renderer.getPageCount();
            if (totalPages == 0) { finish(); return; }
        } catch (Exception e) { e.printStackTrace(); finish(); return; }

        handler = new Handler(Looper.getMainLooper());
        screenWidth = getResources().getDisplayMetrics().widthPixels;

        // 预计算每页高度（基于第一页宽高比）
        precomputeHeights();

        try {
            titleText = findViewById(R.id.title_text);
            pageInfo = findViewById(R.id.page_info);
            pageTotal = findViewById(R.id.page_total);
            seekbar = findViewById(R.id.seekbar);
            btnMode = findViewById(R.id.btn_mode);
            contentArea = findViewById(R.id.content_area);
            toolbar = findViewById(R.id.toolbar);
            bottomBar = findViewById(R.id.bottom_bar);

            titleText.setText(title != null ? title : "");
            seekbar.setMax(Math.max(0, totalPages - 1));
            pageTotal.setText("/ " + totalPages);
            pageInfo.setText("1");

            findViewById(R.id.btn_back).setOnClickListener(v -> finish());

            seekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
                public void onProgressChanged(SeekBar sb, int progress, boolean fromUser) {
                    if (fromUser) {
                        pageInfo.setText(String.valueOf(progress + 1));
                        seekToPage(progress);
                    }
                }
                public void onStartTrackingTouch(SeekBar sb) { seekbarDragging = true; }
                public void onStopTrackingTouch(SeekBar sb) { seekbarDragging = false; }
            });

            SharedPreferences prefs = getSharedPreferences("pdf_prefs", MODE_PRIVATE);
            scrollMode = !"swipe".equals(prefs.getString("read_mode", "scroll"));

            btnMode.setOnClickListener(v -> {
                scrollMode = !scrollMode;
                prefs.edit().putString("read_mode", scrollMode ? "scroll" : "swipe").apply();
                initMode();
            });

            initMode();

            // 跳转到上次阅读位置
            if (lastPage > 0 && lastPage < totalPages) {
                final int lp = lastPage;
                handler.postDelayed(() -> seekToPage(lp), 300);
            }
        } catch (Exception e) { e.printStackTrace(); finish(); }
    }

    /** 预计算每页在屏幕宽度下的实际像素高度 */
    private void precomputeHeights() {
        pageTops = new int[totalPages];
        pageHeights = new int[totalPages];
        // 用第一页获取宽高比（漫画所有页比例一致）
        float ratio = 1.414f; // A4 fallback
        try {
            PdfRenderer.Page p0 = renderer.openPage(0);
            ratio = (float) p0.getHeight() / p0.getWidth();
            p0.close();
        } catch (Exception ignored) {}
        int y = 0;
        for (int i = 0; i < totalPages; i++) {
            pageTops[i] = y;
            int h = (int)(screenWidth * ratio);
            pageHeights[i] = h;
            y += h;
        }
        totalContentH = y;
    }

    private void enterImmersive() {
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    private void initMode() {
        for (ImageView iv : visiblePageViews.values()) {
            if (iv.getDrawable() instanceof android.graphics.drawable.BitmapDrawable) {
                Bitmap b = ((android.graphics.drawable.BitmapDrawable) iv.getDrawable()).getBitmap();
                if (b != null && !b.isRecycled()) b.recycle();
            }
        }
        visiblePageViews.clear();
        contentArea.removeAllViews();
        scrollView = null;
        pagesContainer = null;
        swipeImageView = null;
        if (swipeBitmap != null) { swipeBitmap.recycle(); swipeBitmap = null; }

        if (scrollMode) {
            btnMode.setImageResource(android.R.drawable.ic_menu_gallery);
            initScrollMode();
        } else {
            btnMode.setImageResource(android.R.drawable.ic_menu_sort_by_size);
            initSwipeMode();
        }
    }

    // ══════════ 上下滑动模式 ══════════
    private void initScrollMode() {
        scrollView = new ScrollView(this);
        scrollView.setLayoutParams(new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        scrollView.setBackgroundColor(0xFF333333);

        pagesContainer = new LinearLayout(this);
        pagesContainer.setOrientation(LinearLayout.VERTICAL);
        pagesContainer.setLayoutParams(new ScrollView.LayoutParams(
                ScrollView.LayoutParams.MATCH_PARENT, ScrollView.LayoutParams.WRAP_CONTENT));

        // 创建每页的占位 View
        pageSlots = new View[totalPages];
        for (int i = 0; i < totalPages; i++) {
            View slot = new View(this);
            slot.setLayoutParams(new LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT, pageHeights[i]));
            slot.setBackgroundColor(0xFF333333);
            pagesContainer.addView(slot);
            pageSlots[i] = slot;
        }

        scrollView.addView(pagesContainer);
        contentArea.addView(scrollView);

        handler.post(this::updateScrollPages);

        scrollView.getViewTreeObserver().addOnScrollChangedListener(() -> {
            int scrollY = scrollView.getScrollY();
            int visibleH = scrollView.getHeight();
            int midY = scrollY + visibleH / 2;
            // 二分查找当前页
            int lo = 0, hi = totalPages - 1;
            while (lo < hi) {
                int m = (lo + hi) / 2;
                if (pageTops[m] + pageHeights[m] < midY) lo = m + 1;
                else hi = m;
            }
            currentPage = lo;
            if (!seekbarDragging) {
                seekbar.setProgress(currentPage);
                pageInfo.setText(String.valueOf(currentPage + 1));
            }
            updateScrollPages();
        });
    }

    private void updateScrollPages() {
        if (scrollView == null || pagesContainer == null) return;
        int scrollY = scrollView.getScrollY();
        int visibleH = scrollView.getHeight();
        int buffer = visibleH; // 前后各缓冲一屏

        int firstVisible = Math.max(0, findPageAt(scrollY - buffer));
        int lastVisible = Math.min(totalPages - 1, findPageAt(scrollY + visibleH + buffer));

        // 回收不可见的 ImageView → 换回占位 View
        for (Map.Entry<Integer, ImageView> entry : new HashMap<>(visiblePageViews).entrySet()) {
            int idx = entry.getKey();
            if (idx < firstVisible || idx > lastVisible) {
                ImageView iv = entry.getValue();
                // 回收 bitmap
                if (iv.getDrawable() instanceof android.graphics.drawable.BitmapDrawable) {
                    Bitmap b = ((android.graphics.drawable.BitmapDrawable) iv.getDrawable()).getBitmap();
                    if (b != null && !b.isRecycled()) b.recycle();
                }
                // 用占位 View 替换
                int pos = pagesContainer.indexOfChild(iv);
                if (pos >= 0) {
                    pagesContainer.removeViewAt(pos);
                    pagesContainer.addView(pageSlots[idx], pos);
                }
                visiblePageViews.remove(idx);
            }
        }

        // 渲染新可见页：用 ImageView 替换占位 View
        for (int i = firstVisible; i <= lastVisible; i++) {
            if (!visiblePageViews.containsKey(i)) {
                ImageView iv = new ImageView(this);
                iv.setScaleType(ImageView.ScaleType.FIT_XY);
                iv.setLayoutParams(new LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.MATCH_PARENT, pageHeights[i]));
                iv.setBackgroundColor(0xFF333333);

                int pos = pagesContainer.indexOfChild(pageSlots[i]);
                if (pos >= 0) {
                    pagesContainer.removeViewAt(pos);
                    pagesContainer.addView(iv, pos);
                }
                visiblePageViews.put(i, iv);
                renderPageToView(i, iv);
            }
        }
    }

    /** 二分查找 y 坐标所在的页 */
    private int findPageAt(int y) {
        if (y <= 0) return 0;
        if (y >= totalContentH) return totalPages - 1;
        int lo = 0, hi = totalPages - 1;
        while (lo < hi) {
            int m = (lo + hi + 1) / 2;
            if (pageTops[m] <= y) lo = m;
            else hi = m - 1;
        }
        return lo;
    }

    private void renderPageToView(int index, ImageView iv) {
        if (renderer == null || index < 0 || index >= totalPages) return;
        new Thread(() -> {
            try {
                PdfRenderer.Page page = renderer.openPage(index);
                int pw = page.getWidth(), ph = page.getHeight();
                // 渲染尺寸 = 屏幕宽度 × 实际高度（1:1 像素，不缩放）
                int renderW = screenWidth;
                int renderH = pageHeights[index];

                Bitmap bmp = Bitmap.createBitmap(renderW, renderH, Bitmap.Config.ARGB_8888);
                bmp.eraseColor(0xFF333333);
                android.graphics.Canvas canvas = new android.graphics.Canvas(bmp);
                float sx = (float) renderW / pw;
                float sy = (float) renderH / ph;
                android.graphics.Matrix matrix = new android.graphics.Matrix();
                matrix.setScale(sx, sy);
                page.render(bmp, null, matrix, PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
                page.close();

                handler.post(() -> {
                    try { iv.setImageBitmap(bmp); } catch (Exception ignored) {}
                });
            } catch (Exception e) { e.printStackTrace(); }
        }).start();
    }

    // ══════════ 左右翻页模式 ══════════
    private void initSwipeMode() {
        swipeImageView = new ImageView(this);
        swipeImageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
        swipeImageView.setLayoutParams(new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        swipeImageView.setBackgroundColor(0xFF333333);
        contentArea.addView(swipeImageView);

        final GestureDetector gesture = new GestureDetector(this, new GestureDetector.SimpleOnGestureListener() {
            private static final int SWIPE_THRESHOLD = 80;
            public boolean onFling(MotionEvent e1, MotionEvent e2, float vx, float vy) {
                if (e1 == null || e2 == null) return false;
                float dx = e2.getX() - e1.getX();
                if (Math.abs(dx) > SWIPE_THRESHOLD) {
                    if (dx < 0) showSwipePage(currentPage + 1);
                    else showSwipePage(currentPage - 1);
                }
                return true;
            }
            public boolean onSingleTapConfirmed(MotionEvent e) { toggleBars(); return true; }
        });

        swipeImageView.setOnTouchListener((v, event) -> { gesture.onTouchEvent(event); return true; });
        showSwipePage(0);
    }

    private void showSwipePage(int index) {
        if (index < 0) index = 0;
        if (index >= totalPages) index = totalPages - 1;
        currentPage = index;

        try {
            PdfRenderer.Page page = renderer.openPage(index);
            int pw = page.getWidth(), ph = page.getHeight();
            float screenW = getResources().getDisplayMetrics().widthPixels;
            float screenH = getResources().getDisplayMetrics().heightPixels;
            float scale = Math.min(screenW / pw, screenH / ph);
            int bw = Math.max(1, (int)(pw * scale));
            int bh = Math.max(1, (int)(ph * scale));

            Bitmap bmp = Bitmap.createBitmap(bw, bh, Bitmap.Config.ARGB_8888);
            bmp.eraseColor(0xFF333333);
            android.graphics.Canvas c = new android.graphics.Canvas(bmp);
            float sx = (float) bw / pw, sy = (float) bh / ph;
            android.graphics.Matrix m = new android.graphics.Matrix();
            m.setScale(sx, sy);
            page.render(bmp, null, m, PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
            page.close();

            if (swipeBitmap != null) swipeBitmap.recycle();
            swipeBitmap = bmp;
            swipeImageView.setImageBitmap(bmp);
        } catch (Exception e) { e.printStackTrace(); }

        if (!seekbarDragging) {
            seekbar.setProgress(currentPage);
            pageInfo.setText(String.valueOf(currentPage + 1));
        }
    }

    // ══════════ 共用 ══════════
    private void seekToPage(int page) {
        if (scrollMode && scrollView != null) {
            scrollView.smoothScrollTo(0, pageTops[page]);
        } else if (!scrollMode) {
            showSwipePage(page);
        }
    }

    private void toggleBars() {
        boolean show = toolbar.getVisibility() != View.VISIBLE;
        toolbar.setVisibility(show ? View.VISIBLE : View.GONE);
        bottomBar.setVisibility(show ? View.VISIBLE : View.GONE);
        if (show) enterImmersive();
    }

    @Override
    protected void onDestroy() {
        // 保存阅读进度到 SharedPreferences
        if (pdfPathKey != null && renderer != null) {
            try {
                getSharedPreferences("pdf_progress", MODE_PRIVATE)
                        .edit().putInt(pdfPathKey, currentPage).apply();
            } catch (Exception ignored) {}
        }
        try { if (renderer != null) renderer.close(); } catch (Exception ignored) {}
        try { if (fd != null) fd.close(); } catch (Exception ignored) {}
        if (swipeBitmap != null) { swipeBitmap.recycle(); swipeBitmap = null; }
        super.onDestroy();
    }
}
