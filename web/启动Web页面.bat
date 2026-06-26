@echo off
title Self-Care Tracker Server
cd /d "%~dp0"

echo ====================================
echo    Self-Care Tracker - Server
echo ====================================
echo.

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3001"

echo Server: http://localhost:3001
echo Close this window to stop
echo.

node server.js

echo.
echo Server stopped.
pause
