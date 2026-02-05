#!/bin/bash
# Build script for Bot Iframe PCF Control
# Run this after you have the Copilot Website channel URL

echo "========================================="
echo "Bot Iframe PCF Control - Build Script"
echo "========================================="

# Step 1: Install dependencies
echo ""
echo "[1/3] Installing dependencies..."
npm install

# Step 2: Build the control
echo ""
echo "[2/3] Building PCF control..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "[3/3] Build successful!"
    echo ""
    echo "========================================="
    echo "NEXT STEPS:"
    echo "========================================="
    echo ""
    echo "Option A - Push directly to environment:"
    echo "  pac auth create"
    echo "  pac pcf push --publisher-prefix demo"
    echo ""
    echo "Option B - Create Solution zip:"
    echo "  mkdir -p ../SolutionPkg && cd ../SolutionPkg"
    echo "  pac solution init --publisher-name DemoPublisher --publisher-prefix demo"
    echo "  pac solution add-reference --path ../BotIframe"
    echo "  dotnet build --configuration Release"
    echo ""
    echo "The zip will be at: ../SolutionPkg/bin/Release/SolutionPkg.zip"
    echo ""
else
    echo ""
    echo "Build failed. Check errors above."
    exit 1
fi
