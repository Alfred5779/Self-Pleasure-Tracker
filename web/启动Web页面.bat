@echo off
title 自我管理助手 - Web 服务器
chcp 65001 >nul
echo ====================================
echo    自我管理助手 - Web 版本
echo ====================================
echo.

start "" http://localhost:3001

echo 正在启动服务器...
echo 访问地址: http://localhost:3001
echo 按 Ctrl+C 可停止服务器
echo.

npm run serve
