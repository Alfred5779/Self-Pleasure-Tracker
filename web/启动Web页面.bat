@echo off
chcp 65001 >nul
title 起飞助手 - Web 服务器

echo ====================================
echo    起飞助手 - Web 版本
echo    Self-Care Tracker - Web Version
echo ====================================
echo.

REM 获取脚本所在目录
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

echo 正在启动...
echo Starting...
echo.

REM 方法1：直接打开index.html
echo [1/4] 打开 index.html...
echo [1/4] Opening index.html...
start "" "%SCRIPT_DIR%index.html"
echo.
echo 如果直接打开可以正常使用，就可以关闭这个窗口了
echo If direct open works, you can close this window
echo.
echo 正在尝试启动本地服务器...
echo Trying to start local server...
echo.

REM 检查PowerShell是否可用
echo [2/4] 检查 PowerShell...
echo [2/4] Checking PowerShell...
where powershell >nul 2>&1
if %errorlevel% equ 0 (
    echo 找到 PowerShell
    echo PowerShell found
    echo.
    echo 正在启动服务器...
    echo Starting server...
    echo.
    echo 访问地址 / Access URL:
    echo http://localhost:8000
    echo.
    echo 按 Ctrl+C 停止服务器
    echo Press Ctrl+C to stop server
    echo.
    start "" http://localhost:8000
    powershell -ExecutionPolicy Bypass -File "%SCRIPT_DIR%server.ps1"
    goto :end
)

REM 检查Python
echo [3/4] 检查 Python...
echo [3/4] Checking Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo 找到 Python
    echo Python found
    echo.
    echo 正在启动服务器...
    echo Starting server...
    echo.
    echo 访问地址 / Access URL:
    echo http://localhost:8000
    echo.
    echo 按 Ctrl+C 停止服务器
    echo Press Ctrl+C to stop server
    echo.
    start "" http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM 检查Python3
python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo 找到 Python3
    echo Python3 found
    echo.
    echo 正在启动服务器...
    echo Starting server...
    echo.
    echo 访问地址 / Access URL:
    echo http://localhost:8000
    echo.
    echo 按 Ctrl+C 停止服务器
    echo Press Ctrl+C to stop server
    echo.
    start "" http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

echo.
echo ====================================
echo 无法启动服务器！
echo Cannot start server!
echo ====================================
echo.
echo 请直接使用 index.html
echo Please use index.html directly
echo.

:end
echo.
pause
