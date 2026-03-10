@echo off
chcp 65001 >nul
title 起飞助手

echo ====================================
echo    起飞助手 - Web 版本
echo ====================================
echo.

REM 获取脚本所在目录
set "SCRIPT_DIR=%~dp0"

echo 正在打开应用...
echo.

REM 直接打开index.html
start "" "%SCRIPT_DIR%index.html"

echo 应用已在浏览器中打开！
echo.
echo 如果需要使用本地服务器功能：
echo 1. 右键点击 server.ps1
echo 2. 选择"使用PowerShell运行"
echo.

pause
