@echo off
echo 🚀 Opening Comprehensive 15-Minute Azrou Platform Presentation...
echo.

if exist "Comprehensive_15Min_Azrou_Platform_Presentation_2025.pptx" (
    echo ✅ Found presentation file!
    echo 📊 Opening with default PowerPoint application...
    start "" "Comprehensive_15Min_Azrou_Platform_Presentation_2025.pptx"
    echo.
    echo 🎯 PRESENTATION OVERVIEW:
    echo    • 20 professional slides with visual elements
    echo    • Interactive charts and metrics dashboards  
    echo    • Technical architecture diagrams
    echo    • User journey workflows and use cases
    echo    • Performance analytics and KPIs
    echo    • Cost-benefit analysis with real data
    echo    • Future roadmap and scalability plans
    echo    • Live demo preparation section
    echo.
    echo ⏱️  Estimated presentation time: 15 minutes
    echo 🎨 Enhanced with gradients, charts, and visual elements
    echo.
    echo 💡 PRESENTATION TIPS:
    echo    • Practice the demo flow beforehand
    echo    • Prepare for technical questions
    echo    • Add your actual screenshots to placeholder areas
    echo    • Customize metrics to match your real data
    echo    • Rehearse the architecture explanations
    echo.
) else (
    echo ❌ Presentation file not found!
    echo 🔧 Please run the generator first:
    echo    python generate_comprehensive_presentation.py
)

pause
