// Script to download real estate images from Unsplash
// This script uses Node.js to download images from Unsplash
// Run with: node download-images.mjs

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of property names
const properties = [
  'six-senses',
  'flora-isle',
  'jumeirah-residences',
  'sol-levante',
  'koro-one',
  'silva-emaar',
  'sidr-residences',
  'terra-heights',
  'wynwood',
  'camden',
  'ora-ghantoot',
  'talea'
];

// Unsplash image URLs for luxury real estate
// These are royalty-free images from Unsplash that are suitable for luxury real estate
const imageUrls = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753051-f0b5dc520776?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
];

// Backup URLs in case the primary ones fail
const backupImageUrls = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600047508788-26bb84920d5d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600047508644-9e50fc387055?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop'
];

// Function to download an image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

// Download images for each property
async function downloadAllImages() {
  try {
    // Create thumbnails directory if it doesn't exist
    const thumbnailDir = path.join(__dirname, 'public', 'images', 'properties-thumbnails');
    const fullsizeDir = path.join(__dirname, 'public', 'images', 'properties');
    
    if (!fs.existsSync(thumbnailDir)) {
      fs.mkdirSync(thumbnailDir, { recursive: true });
    }
    
    if (!fs.existsSync(fullsizeDir)) {
      fs.mkdirSync(fullsizeDir, { recursive: true });
    }

    // Download each image
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      const primaryUrl = imageUrls[i % imageUrls.length]; // Cycle through URLs if we have more properties than URLs
      const backupUrl = backupImageUrls[i % backupImageUrls.length];
      
      const thumbnailPath = path.join(thumbnailDir, `${property}-thumb.jpg`);
      const fullsizePath = path.join(fullsizeDir, `${property}.jpg`);
      
      console.log(`Downloading image for ${property}...`);
      
      try {
        // Try to download thumbnail with primary URL
        await downloadImage(primaryUrl, thumbnailPath);
        console.log(`Thumbnail saved to ${thumbnailPath}`);
        
        // Try to download fullsize with primary URL
        await downloadImage(primaryUrl, fullsizePath);
        console.log(`Fullsize image saved to ${fullsizePath}`);
      } catch (error) {
        console.log(`Error with primary URL for ${property}, trying backup URL...`);
        
        try {
          // Try backup URL for thumbnail
          await downloadImage(backupUrl, thumbnailPath);
          console.log(`Thumbnail saved to ${thumbnailPath} (using backup URL)`);
          
          // Try backup URL for fullsize
          await downloadImage(backupUrl, fullsizePath);
          console.log(`Fullsize image saved to ${fullsizePath} (using backup URL)`);
        } catch (backupError) {
          console.error(`Failed to download images for ${property}: ${backupError.message}`);
        }
      }
    }
    
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the download function
downloadAllImages(); 