#!/bin/bash

# Property Images Replacement Script
# Run this after downloading real property images

echo "🎯 Property Images Replacement Script"
echo "======================================"

# Check if images exist before replacing
check_image() {
    if [ -f "$1" ]; then
        echo "✅ Found: $1"
        return 0
    else
        echo "❌ Missing: $1"
        return 1
    fi
}

echo ""
echo "📸 Checking for new property images..."

# Define image paths
declare -A images=(
    ["selvara_main"]="./new-images/selvara.jpg"
    ["selvara_thumb"]="./new-images/selvara-thumb.jpg"
    ["selvara_asset"]="./new-images/selvara-project.jpg"
    ["montura_main"]="./new-images/montura.jpg"
    ["montura_thumb"]="./new-images/montura-thumb.jpg"
    ["sera2_main"]="./new-images/sera-2.jpg"
    ["sera2_thumb"]="./new-images/sera-2-thumb.jpg"
    ["alwaha_main"]="./new-images/al-waha.jpg"
    ["alwaha_thumb"]="./new-images/al-waha-thumb.jpg"
)

# Check which images are available
available_images=0
total_images=${#images[@]}

for key in "${!images[@]}"; do
    if check_image "${images[$key]}"; then
        ((available_images++))
    fi
done

echo ""
echo "📊 Found $available_images out of $total_images images"

if [ $available_images -eq 0 ]; then
    echo ""
    echo "⚠️  No new images found in ./new-images/ directory"
    echo "💡 Please:"
    echo "   1. Create a 'new-images' folder in the project root"
    echo "   2. Add your downloaded property images with correct names"
    echo "   3. Run this script again"
    echo ""
    echo "📋 Expected filenames:"
    for key in "${!images[@]}"; do
        echo "   - ${images[$key]}"
    done
    exit 1
fi

echo ""
read -p "🤔 Do you want to replace the existing placeholder images? (y/N): " confirm

if [[ $confirm =~ ^[Yy]$ ]]; then
    echo ""
    echo "🔄 Replacing images..."
    
    # Create backup
    backup_dir="./backup/$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$backup_dir/properties"
    mkdir -p "$backup_dir/properties-thumbnails"
    mkdir -p "$backup_dir/assets"
    
    echo "💾 Creating backup in $backup_dir"
    cp -r ./public/images/properties/* "$backup_dir/properties/" 2>/dev/null || true
    cp -r ./public/images/properties-thumbnails/* "$backup_dir/properties-thumbnails/" 2>/dev/null || true
    cp -r ./src/assets/*.jpg "$backup_dir/assets/" 2>/dev/null || true
    
    # Replace images
    replaced=0
    
    if [ -f "${images[selvara_main]}" ]; then
        cp "${images[selvara_main]}" "./public/images/properties/selvara.jpg"
        echo "✅ Replaced Selvara main image"
        ((replaced++))
    fi
    
    if [ -f "${images[selvara_thumb]}" ]; then
        cp "${images[selvara_thumb]}" "./public/images/properties-thumbnails/selvara-thumb.jpg"
        echo "✅ Replaced Selvara thumbnail"
        ((replaced++))
    fi
    
    if [ -f "${images[selvara_asset]}" ]; then
        cp "${images[selvara_asset]}" "./src/assets/selvara-project.jpg"
        echo "✅ Replaced Selvara homepage asset"
        ((replaced++))
    fi
    
    if [ -f "${images[montura_main]}" ]; then
        cp "${images[montura_main]}" "./public/images/properties/montura.jpg"
        echo "✅ Replaced Montura main image"
        ((replaced++))
    fi
    
    if [ -f "${images[montura_thumb]}" ]; then
        cp "${images[montura_thumb]}" "./public/images/properties-thumbnails/montura-thumb.jpg"
        echo "✅ Replaced Montura thumbnail"
        ((replaced++))
    fi
    
    if [ -f "${images[sera2_main]}" ]; then
        cp "${images[sera2_main]}" "./public/images/properties/sera-2.jpg"
        echo "✅ Replaced Sera 2 main image"
        ((replaced++))
    fi
    
    if [ -f "${images[sera2_thumb]}" ]; then
        cp "${images[sera2_thumb]}" "./public/images/properties-thumbnails/sera-2-thumb.jpg"
        echo "✅ Replaced Sera 2 thumbnail"
        ((replaced++))
    fi
    
    if [ -f "${images[alwaha_main]}" ]; then
        cp "${images[alwaha_main]}" "./public/images/properties/al-waha.jpg"
        echo "✅ Replaced Al Waha main image"
        ((replaced++))
    fi
    
    if [ -f "${images[alwaha_thumb]}" ]; then
        cp "${images[alwaha_thumb]}" "./public/images/properties-thumbnails/al-waha-thumb.jpg"
        echo "✅ Replaced Al Waha thumbnail"
        ((replaced++))
    fi
    
    echo ""
    echo "🎉 Successfully replaced $replaced images!"
    echo "💾 Backup created in: $backup_dir"
    echo ""
    echo "🚀 The development server will automatically reload with new images"
    echo "🌐 View your site at: http://localhost:8080"
    
else
    echo ""
    echo "❌ Image replacement cancelled"
fi

echo ""
echo "📖 For detailed instructions, see: PROPERTY-IMAGES-GUIDE.md"
