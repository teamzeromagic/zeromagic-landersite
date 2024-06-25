#!/bin/sh

#  Build the Documentation App
cd apps/docs
echo "📂 Building Documentation App..."

npm run build

echo "✅️ Documentation Build Successful"

# Backtracking
cd ../../

echo "📄 Copying Documentation App to website public folder..."

# Copy the documentation build files to react-website 
node copy-docs.mjs

echo "✅️ Documentation Build Copied Successfully"

#  Build the react webiste
cd apps/website
echo "📂 Building Magic Website App..."

npm run build

echo "✅️ Magic Website Build Successful"

# Backtracking
cd ../../

echo "📄 Moving Magic Website build folder to base directory..."
# Move the final website build files to base directory
cp -r apps/website/build ./

echo "💡 Magic Website Build Moved Successfully"

echo "📂 The final production app is present in 'build' folder"