#!/bin/bash
# Abigail's 22nd Birthday - Quick GitHub Push Helper

set -e

echo "✨ Abigail's 22nd Birthday - GitHub Setup ✨"
echo "============================================="

if [ -z "$1" ]; then
  echo "Usage: ./deploy_github.sh <your-github-username-or-remote-url>"
  echo "Example: ./deploy_github.sh jacksonmcmurdo"
  echo "   or:   ./deploy_github.sh https://github.com/jacksonmcmurdo/Abigails-22nd-Birthday.git"
  exit 1
fi

PARAM=$1

if [[ $PARAM == https://* ]] || [[ $PARAM == git@* ]]; then
  REMOTE_URL=$PARAM
else
  REMOTE_URL="https://github.com/${PARAM}/Abigails-22nd-Birthday.git"
fi

git add .
git commit -m "Happy 22nd Birthday Abigail! ✨" || true

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

git branch -M main

echo "Pushing to $REMOTE_URL..."
git push -u origin main

echo ""
echo "🎉 Successfully pushed to GitHub!"
echo "Now head to your repository Settings -> Pages -> Select 'main' branch to go live!"
