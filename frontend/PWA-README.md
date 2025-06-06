# PWA Implementation for Avarancloud

This guide explains how to implement and use the Progressive Web App (PWA) capabilities in the Avarancloud project.

## Files Created/Modified

1. **manifest.json** - Located in public/ directory, defines the application's appearance when installed on devices
2. **sw.js** - Service Worker located in public/ directory, provides offline capabilities
3. **app.vue** - Modified to include service worker registration
4. **nuxt.config.ts** - Modified to include PWA-related meta tags
5. **scripts/generate-pwa-icons.js** - Script to generate PWA icons from the existing logo

## How to Complete Setup

1. **Generate the PWA Icons**:
   ```bash
   # Install Sharp (if not already installed)
   npm install sharp --save-dev
   
   # Generate the PWA icons
   npm run generate-pwa-icons
   ```

2. **Build and Test the PWA**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify PWA Installation**:
   - Open Chrome DevTools
   - Go to the Application tab
   - Check Manifest and Service Workers to ensure they are registered properly

## PWA Features

- **Offline Access**: Basic content will be available offline
- **Installable**: Users can add the app to their home screen
- **Fast Loading**: Cached resources for quick loading
- **Native App-like Experience**: Full-screen mode without browser UI when launched from home screen

## Customization

You can modify the following files to customize the PWA experience:

- **manifest.json** - Change colors, name, and application details
- **nuxt.config.ts** - Update PWA-related meta tags
- **sw.js** - Modify caching strategies and offline behavior

## Testing Installation

To test installation on mobile devices:
1. Visit the site on Chrome for Android or Safari for iOS
2. You should see an "Add to Home Screen" prompt, or find it in the browser menu
3. After installation, the app will appear on the device's home screen with the Avarancloud logo 