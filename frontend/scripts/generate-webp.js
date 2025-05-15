#!/usr/bin/env node

/**
 * This script generates WebP versions of all PNG and JPEG images in the assets directory
 * It requires the 'sharp' package to be installed:
 * npm install sharp --save-dev
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const ASSETS_DIR = path.resolve(__dirname, '../assets');
const QUALITY = 85; // WebP quality (0-100)
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const EXCLUDE_DIRS = ['node_modules', '.nuxt', '.git', 'compressed_images'];

/**
 * Process an image file and create a WebP version
 * @param {string} filePath - Path to the original image file
 * @returns {Promise<void>}
 */
async function processImage(filePath) {
  try {
    const fileInfo = path.parse(filePath);
    const outputPath = path.join(fileInfo.dir, `${fileInfo.name}.webp`);
    
    // Skip if WebP version already exists and is newer
    if (fs.existsSync(outputPath)) {
      const originalStat = fs.statSync(filePath);
      const webpStat = fs.statSync(outputPath);
      
      if (webpStat.mtime > originalStat.mtime) {
        console.log(`Skipping ${path.basename(filePath)} (WebP is up to date)`);
        return;
      }
    }
    
    console.log(`Converting ${path.basename(filePath)} to WebP...`);
    
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
      
    console.log(`Created ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Recursively scan a directory for image files
 * @param {string} dirPath - Directory path to scan
 * @returns {void}
 */
function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        // Skip excluded directories
        if (EXCLUDE_DIRS.includes(item)) {
          continue;
        }
        
        scanDirectory(itemPath);
      } else if (stats.isFile()) {
        const ext = path.extname(itemPath).toLowerCase();
        
        if (IMAGE_EXTENSIONS.includes(ext)) {
          processImage(itemPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dirPath}:`, error.message);
  }
}

// Main execution
console.log('Starting WebP conversion...');
scanDirectory(ASSETS_DIR);
console.log('Done! Check your assets directory for the WebP images.'); 