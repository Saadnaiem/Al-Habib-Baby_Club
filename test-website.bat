@echo off
echo ===============================================
echo   AL HABIB BABY+ CLUB - WEBSITE TEST SCRIPT
echo ===============================================
echo.

echo 1. TESTING LOCAL WEBSITE...
echo   Opening index.html in your browser...
echo.
start index.html

echo.
echo 2. TESTING GITHUB PAGES...
echo   Your GitHub Pages URL: https://saadnaiem.github.io/Al-Habib-Baby_Club
echo   Opening GitHub Pages in your browser...
echo.
start https://saadnaiem.github.io/Al-Habib-Baby_Club

echo.
echo 3. STARTING LOCAL SERVER...
echo   Starting local server at http://localhost:8000
echo   Opening local server in your browser...
echo.
start http://localhost:8000
echo   Starting Python server (press Ctrl+C to stop)...
python -m http.server 8000

pause
