#!/usr/bin/env bash

echo "Building the project..."
python -m pip install -r requirements.txt

echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "Collecting static files..."
python manage.py collectstatic --no-input

echo "Build completed!"