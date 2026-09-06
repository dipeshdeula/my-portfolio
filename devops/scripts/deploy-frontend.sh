#!/usr/bin/env bash

set -euo pipefail

PROJECT_DIR="/home/ubuntu/apps/my-portfolio"
FRONTEND_DIR="$PROJECT_DIR/frontend"
DEPLOY_DIR="/var/www/my-portfolio"

echo "====================================="
echo "Deploying my-portfolio frontend"
echo "====================================="

cd "$PROJECT_DIR"

echo "Pulling latest source..."
git pull origin main

cd "$FRONTEND_DIR"

echo "Installing dependencies..."
bun install --frozen-lockfile

echo "Building frontend..."
bun run build

echo "Deploying build..."
sudo mkdir -p "$DEPLOY_DIR"

sudo rsync \
    -av \
    --delete \
    "$FRONTEND_DIR/dist/" \
    "$DEPLOY_DIR/"

echo "Testing nginx..."
sudo nginx -t

echo "Reloading nginx..."
sudo systemctl reload nginx

echo "====================================="
echo "Deployment successful"
echo "====================================="