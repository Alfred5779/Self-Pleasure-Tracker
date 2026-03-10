@echo off
title 起飞助手 - Web 服务器
chcp 65001 >nul
echo ====================================
echo    起飞助手 - Web 版本
echo    Self-Care Tracker - Web Version
echo ====================================
echo.

REM 获取脚本所在目录
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

REM 方法1：优先尝试直接用浏览器打开index.html
echo [方法1/4] 尝试直接打开index.html...
echo [Method 1/4] Trying to open index.html directly...
start "" "%SCRIPT_DIR%index.html"
echo.
echo 如果直接打开无法正常使用，请保持此窗口打开，我们将尝试启动本地服务器
echo If direct open doesn't work, keep this window open, we'll try local server
echo.
timeout /t 2 >nul

REM 方法2：尝试使用PowerShell启动我们的专用服务器
echo [方法2/4] 尝试使用PowerShell启动服务器...
echo [Method 2/4] Trying to start server with PowerShell...
if exist "%SCRIPT_DIR%server.ps1" (
    echo 找到PowerShell服务器脚本，正在启动...
    echo Found PowerShell server script, starting...
    start "" http://localhost:8000
    powershell -ExecutionPolicy Bypass -File "%SCRIPT_DIR%server.ps1"
    if %errorlevel% equ 0 (
        goto :end
    )
)

REM 方法3：检查Python是否可用，启动Python HTTP服务器
echo [方法3/4] 检查Python...
echo [Method 3/4] Checking Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo 找到Python，正在启动HTTP服务器...
    echo Found Python, starting HTTP server...
    echo 访问地址: http://localhost:8000
    echo 按 Ctrl+C 可停止服务器
    echo.
    start "" http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM 方法4：检查Python3是否可用
python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo 找到Python3，正在启动HTTP服务器...
    echo Found Python3, starting HTTP server...
    echo 访问地址: http://localhost:8000
    echo 按 Ctrl+C 可停止服务器
    echo.
    start "" http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

echo.
echo ====================================
echo 无法自动启动服务器！
echo Cannot auto-start server!
echo ====================================
echo.
echo 请尝试以下方法：
echo Please try the following methods:
echo.
echo 1. 直接双击 index.html 使用
echo    Double-click index.html directly
echo.
echo 2. 右键点击 server.ps1，选择"使用PowerShell运行"
echo    Right-click server.ps1, select "Run with PowerShell"
echo.
echo 3. 如果安装了Python，运行: python -m http.server 8000
echo    If Python is installed, run: python -m http.server 8000
echo.

:end
echo.
echo 按任意键退出...
echo Press any key to exit...
pause >nul
