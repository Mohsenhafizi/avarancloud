/**
 * Image Optimization Service
 * This service provides utilities for optimizing images and improving LCP
 */

/**
 * Get optimized image source based on format preference
 * @param {string} src - Original image source
 * @param {string} format - Preferred format (webp, avif, etc)
 * @returns {string} - Optimized image source
 */
export function getOptimizedImageSrc(src, format = 'webp') {
  // Check if we're on server or if no src provided
  if (typeof window === 'undefined' || !src) {
    return src;
  }

  // Handle absolute URLs
  if (src.startsWith('http')) {
    return src;
  }

  // For local assets, convert to optimized format
  if (src.match(/\.(png|jpe?g)$/i)) {
    const basePath = src.substring(0, src.lastIndexOf('.'));
    return `${basePath}.${format}`;
  }

  return src;
}

/**
 * Preload critical images to improve LCP
 * @param {Array<string>} imagePaths - Array of critical image paths
 */
export function preloadCriticalImages(imagePaths = []) {
  // Skip on server
  if (typeof window === 'undefined') {
    return;
  }

  // Default critical images if none provided
  if (!imagePaths.length) {
    imagePaths = [
      '/assets/photos/mobile-screen.png',
      '/assets/photos/sample-screen.png',
      '/assets/photos/sample-screen2.png',
      '/svg/vector-7.svg'
    ];
  }

  const head = document.head;
  
  // Create preload links for each image
  imagePaths.forEach(path => {
    const isImage = path.match(/\.(jpe?g|png|gif|svg|webp|avif)$/i);
    
    if (!isImage) return;
    
    // Check if preload link already exists
    const existingLink = document.querySelector(`link[rel="preload"][href="${path}"]`);
    if (existingLink) return;
    
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = path;
    preloadLink.as = 'image';
    
    // Set correct mime type
    if (path.endsWith('.svg')) {
      preloadLink.type = 'image/svg+xml';
    } else if (path.endsWith('.webp')) {
      preloadLink.type = 'image/webp';
    } else if (path.endsWith('.avif')) {
      preloadLink.type = 'image/avif';
    } else if (path.match(/\.jpe?g$/i)) {
      preloadLink.type = 'image/jpeg';
    } else if (path.endsWith('.png')) {
      preloadLink.type = 'image/png';
    }
    
    head.appendChild(preloadLink);
  });
}

/**
 * Create a WebP version of an image element if supported
 * @param {HTMLImageElement} imgElement - The image element to optimize
 */
export function optimizeImageElement(imgElement) {
  if (!imgElement || !imgElement.src) return;
  
  const webpSupported = () => {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };
  
  // Only proceed if WebP is supported
  if (webpSupported() && imgElement.src.match(/\.(png|jpe?g)$/i)) {
    const newSrc = getOptimizedImageSrc(imgElement.src, 'webp');
    
    // Create new image to test if WebP version exists
    const testImg = new Image();
    testImg.onload = () => {
      imgElement.src = newSrc;
    };
    testImg.onerror = () => {
      // WebP doesn't exist, keep original format
    };
    testImg.src = newSrc;
  }
  
  // Add loading and decoding attributes for performance
  if (!imgElement.hasAttribute('loading')) {
    // Prioritize LCP images, lazy load others
    const isLCP = 
      imgElement.src.includes('mobile-screen') || 
      imgElement.src.includes('sample-screen') || 
      imgElement.src.includes('logo-avarancloud') ||
      imgElement.classList.contains('lcp-image');
    
    imgElement.loading = isLCP ? 'eager' : 'lazy';
    
    if (isLCP && !imgElement.hasAttribute('fetchpriority')) {
      imgElement.setAttribute('fetchpriority', 'high');
    }
  }
  
  if (!imgElement.hasAttribute('decoding')) {
    imgElement.decoding = 'async';
  }
} 