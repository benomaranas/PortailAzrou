@echo off
echo Generating Modern Animated PowerPoint Presentation...
echo =====================================================

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Python not found. Trying py launcher...
    py --version >nul 2>&1
    if errorlevel 1 (
        echo ERROR: Python is not installed or not in PATH
        echo Please install Python from https://python.org
        pause
        exit /b 1
    )
    set PYTHON_CMD=py
) else (
    set PYTHON_CMD=python
)

echo Python found! Installing required modules...
%PYTHON_CMD% -m pip install python-pptx

echo Generating presentation...
%PYTHON_CMD% generate_modern_presentation.py

if exist "Modern_Animated_Presentation_Azrou_Platform_2025.pptx" (
    echo.
    echo SUCCESS! Presentation generated successfully!
    echo File: Modern_Animated_Presentation_Azrou_Platform_2025.pptx
    echo.
    echo Opening presentation...
    start "" "Modern_Animated_Presentation_Azrou_Platform_2025.pptx"
) else (
    echo ERROR: Presentation file was not created.
)

pause
