@echo off
cd /d "%~dp0"

if not exist ".git" (
    git init
    git branch -M main
    git remote add origin https://github.com/DemosLady/demosaii-links.git
)

git add -A
git commit -m "publish %date% %time%"
git push -u origin main --force

echo.
echo Done.
pause
