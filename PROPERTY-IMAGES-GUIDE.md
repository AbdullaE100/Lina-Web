# Property Images Collection Guide

## 🎯 Objective
Replace placeholder images with real property photos for:
- Selvara at Grand Polo Club & Resort
- Montura at Grand Polo Club & Resort  
- Sera 2 at Rashid Yachts & Marina
- Al Waha Residences at Expo City Dubai

## 📸 Required Images

### 1. Selvara at Grand Polo Club & Resort
**Source:** https://properties.emaar.com/en/properties/selvara-at-grand-polo-club-and-resort/
- **Main Image:** `public/images/properties/selvara.jpg` (1200x800px recommended)
- **Thumbnail:** `public/images/properties-thumbnails/selvara-thumb.jpg` (400x300px recommended)
- **Homepage Asset:** `src/assets/selvara-project.jpg` (800x600px recommended)

**Image Types Needed:**
- Villa exterior with contemporary architecture
- Polo field views
- Interior shots showing luxury finishes
- Community amenities (pools, clubhouse)

### 2. Montura at Grand Polo Club & Resort
**Source:** https://properties.emaar.com/en/properties/montura-at-grand-polo/
- **Main Image:** `public/images/properties/montura.jpg`
- **Thumbnail:** `public/images/properties-thumbnails/montura-thumb.jpg`

**Image Types Needed:**
- 4-5 bedroom villa exteriors
- Polo field and green landscapes
- Luxury interiors with marble finishes
- Clubhouse and amenities

### 3. Sera 2 at Rashid Yachts & Marina
**Source:** https://properties.emaar.com/en/properties/sera-2-at-rashid-yachts-and-marina/
- **Main Image:** `public/images/properties/sera-2.jpg`
- **Thumbnail:** `public/images/properties-thumbnails/sera-2-thumb.jpg`

**Image Types Needed:**
- Marina views with blue glass architecture
- Water gardens and resort-style pools
- Apartment/townhouse interiors
- Yacht marina and waterfront promenade

### 4. Al Waha Residences at Expo City Dubai
**Source:** https://www.expocitydubai.com/en/al-waha/
- **Main Image:** `public/images/properties/al-waha.jpg`
- **Thumbnail:** `public/images/properties-thumbnails/al-waha-thumb.jpg`

**Image Types Needed:**
- Modern sustainable architecture
- Expo City Dubai district views
- Smart home features
- Community amenities and green spaces

## 🛠️ How to Collect Images

### Method 1: Manual Download (Recommended)
1. Visit each property website
2. Right-click on high-quality images
3. Save as the specified filename
4. Optimize images for web (compress to ~200-500KB)

### Method 2: Developer Tools
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Refresh the property page
4. Filter by Images
5. Find high-resolution images and download

### Method 3: Screenshot Tool (Last Resort)
1. Use browser screenshot extensions
2. Capture high-quality sections
3. Crop and optimize in image editor

## 📐 Image Specifications

### Main Property Images
- **Size:** 1200x800px (3:2 aspect ratio)
- **Format:** JPG
- **Quality:** High (80-90%)
- **File Size:** 200-500KB

### Thumbnails
- **Size:** 400x300px (4:3 aspect ratio)
- **Format:** JPG
- **Quality:** Medium-High (70-80%)
- **File Size:** 50-150KB

### Homepage Assets
- **Size:** 800x600px (4:3 aspect ratio)
- **Format:** JPG
- **Quality:** High (80-90%)
- **File Size:** 150-300KB

## 🎨 Image Optimization Tools

### Online Tools
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **Optimizilla:** https://imagecompressor.com/

### Desktop Tools
- **Photoshop:** Export for Web
- **GIMP:** Free alternative
- **ImageOptim** (Mac)

## 📝 Implementation Checklist

- [ ] Download Selvara images (main + thumbnail + homepage asset)
- [ ] Download Montura images (main + thumbnail)  
- [ ] Download Sera 2 images (main + thumbnail)
- [ ] Download Al Waha images (main + thumbnail)
- [ ] Optimize all images for web
- [ ] Replace placeholder images in directories
- [ ] Test website to ensure images load correctly
- [ ] Verify responsive behavior on mobile/tablet

## 🚀 Quick Setup Script

```bash
# Navigate to project directory
cd /Users/abdullaehsan/Lina-Web

# Create backup of current images
mkdir -p backup/images
cp -r public/images/properties backup/images/
cp -r public/images/properties-thumbnails backup/images/

# After downloading new images, restart dev server
npm run dev
```

## 📞 Contact for High-Resolution Images

If you need assistance obtaining high-resolution images:
1. Contact Emaar Properties marketing team
2. Request press kit/media assets
3. Use official property brochures (PDF images)
4. Contact Expo City Dubai media relations

## ⚖️ Legal Considerations

- Ensure images are used with proper permissions
- Credit sources when required
- Respect copyright and terms of use
- Consider fair use for portfolio/marketing purposes
- Obtain written permission for commercial use if needed