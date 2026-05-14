#!/bin/bash
# GitHub Setup Script for BETAPP
# Run this after creating an empty repo on GitHub at https://github.com/ayugpoudel/BETAPP

echo "🚀 Pushing BETAPP to GitHub..."
echo ""
echo "Make sure you have:"
echo "1. ✓ Created empty repo at https://github.com/ayugpoudel/BETAPP"
echo "2. ✓ GitHub authentication configured (SSH or HTTPS)"
echo ""

cd "$(dirname "$0")" || exit

# Add remote and push
git remote add origin https://github.com/ayugpoudel/BETAPP.git
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "📍 Repository: https://github.com/ayugpoudel/BETAPP"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   - Repository exists at https://github.com/ayugpoudel/BETAPP"
    echo "   - GitHub authentication is configured"
    echo "   - You have internet connectivity"
fi
