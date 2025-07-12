// Simple script to generate placeholder thumbnails for properties
// This is a placeholder generator - in a production environment, you would use real property images

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

// Create placeholder SVG content for each property
properties.forEach(property => {
  // Generate a random color for the placeholder
  const colors = [
    '#D4AF37', // Gold
    '#C0C0C0', // Silver
    '#B87333', // Copper
    '#E5E4E2', // Platinum
    '#CFB53B', // Old Gold
    '#D3D3D3', // Light Gray
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Create SVG content
  const svgContent = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill="${randomColor}" />
    <text x="400" y="300" font-family="Arial" font-size="32" text-anchor="middle" fill="white">${property.replace(/-/g, ' ')}</text>
    <text x="400" y="350" font-family="Arial" font-size="24" text-anchor="middle" fill="white">Luxury Property</text>
  </svg>`;
  
  // Write to file
  const outputPath = path.join(__dirname, 'properties-thumbnails', `${property}-thumb.svg`);
  fs.writeFileSync(outputPath, svgContent);
  
  console.log(`Created thumbnail for ${property}`);
});

console.log('All thumbnails generated!'); 