#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "🚀 Building the project..."

echo "📦 Installing Python dependencies..."
python -m pip install -r requirements.txt

echo "🛠️ Building frontend..."
cd frontend
# Instalar dependencias de Node
npm install
# Construir el proyecto de React para producción
NODE_ENV=production npm run build
cd ..

echo "📂 Collecting static files..."
python manage.py collectstatic --noinput --clear

echo "✨ Build completed!"