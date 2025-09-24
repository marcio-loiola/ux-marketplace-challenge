#!/bin/bash
set -e
echo "--- Changing directory to backend ---"
cd backend
echo "--- Current directory: $(pwd) ---"
echo "--- Installing npm dependencies ---"
npm install
echo "--- npm install complete ---"
