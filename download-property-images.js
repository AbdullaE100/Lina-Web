const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const propertiesDir = './public/images/properties';
const thumbnailsDir = './public/images/properties-thumbnails';

if (!fs.existsSync(propertiesDir)) {
  fs.mkdirSync(propertiesDir, { recursive: true });
}
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

// Property image URLs - these would need to be actual URLs from the websites
const propertyImages = {
  'selvara': {
    main: 'https://properties.emaar.com/content/dam/emaar-properties/properties/selvara-at-grand-polo-club-and-resort/gallery/selvara-villa-exterior.jpg',
    thumb: 'https://properties.emaar.com/content/dam/emaar-properties/properties/selvara-at-grand-polo-club-and-resort/gallery/selvara-villa-thumb.jpg'
  },
  'montura': {
    main: 'https://properties.emaar.com/content/dam/emaar-properties/properties/montura-at-grand-polo/gallery/montura-villa-exterior.jpg',
    thumb: 'https://properties.emaar.com/content/dam/emaar-properties/properties/montura-at-grand-polo/gallery/montura-villa-thumb.jpg'
  },
  'sera-2': {
    main: 'https://properties.emaar.com/content/dam/emaar-properties/properties/sera-2-at-rashid-yachts-and-marina/gallery/sera-2-exterior.jpg',
    thumb: 'https://properties.emaar.com/content/dam/emaar-properties/properties/sera-2-at-rashid-yachts-and-marina/gallery/sera-2-thumb.jpg'
  },
  'al-waha': {
    main: 'https://www.expocitydubai.com/content/dam/expo-city-dubai/al-waha/al-waha-exterior.jpg',
    thumb: 'https://www.expocitydubai.com/content/dam/expo-city-dubai/al-waha/al-waha-thumb.jpg'
  }
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${url}: Status ${response.statusCode}`);
        resolve(); // Continue with other downloads
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${url}:`, err.message);
      resolve(); // Continue with other downloads
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting property image downloads...\n');
  
  for (const [propertyName, urls] of Object.entries(propertyImages)) {
    console.log(`📸 Downloading images for ${propertyName}...`);
    
    // Download main image
    const mainPath = path.join(propertiesDir, `${propertyName}.jpg`);
    await downloadImage(urls.main, mainPath);
    
    // Download thumbnail
    const thumbPath = path.join(thumbnailsDir, `${propertyName}-thumb.jpg`);
    await downloadImage(urls.thumb, thumbPath);
    
    console.log('');
  }
  
  console.log('✨ Image download process completed!');
}

// Note: The URLs above are placeholders. 
// In practice, we would need to:
// 1. Inspect the actual websites to find direct image URLs
// 2. Handle different image formats and sizes
// 3. Potentially use web scraping or browser automation
// 4. Respect robots.txt and terms of service

console.log('📝 Note: This script contains placeholder URLs.');
console.log('💡 For real implementation, we need to:');
console.log('   - Find actual direct image URLs from the websites');
console.log('   - Use web scraping tools like Puppeteer for dynamic content');
console.log('   - Ensure compliance with website terms of service');
console.log('   - Handle different image formats and optimize sizes');

// Uncomment to run the download (with real URLs)
// downloadAllImages();
