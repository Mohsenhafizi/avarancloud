// Script to generate PWA icons from logo
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the icons directory exists
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Source logo path
const sourceLogoPath = path.join(__dirname, '../public/abravaran-logo.png');

// Define icon sizes for PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Process each size
async function generateIcons() {
  for (const size of sizes) {
    await sharp(sourceLogoPath)
      .resize(size, size)
      .toFile(path.join(iconsDir, `icon-${size}x${size}.png`));
    
    console.log(`Generated icon-${size}x${size}.png`);
  }
  console.log('PWA icons generation completed!');
}

generateIcons().catch(err => {
  console.error('Error generating PWA icons:', err);
}); 