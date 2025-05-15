import { defineEventHandler, appendHeader } from 'h3'

/**
 * Server middleware to optimize LCP by adding proper HTTP headers
 */
export default defineEventHandler((event) => {
  // Set Cache-Control headers for static assets
  const url = event.node.req.url || ''
  
  // Add Cache-Control headers for static assets that affect LCP
  if (url.match(/\.(jpe?g|png|gif|webp|avif|svg|css|js|woff2?)$/i)) {
    // Images and fonts can be cached longer
    if (url.match(/\.(jpe?g|png|gif|webp|avif|svg|woff2?)$/i)) {
      appendHeader(event, 'Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400')
    } 
    // JS and CSS should have shorter cache times
    else if (url.match(/\.(css|js)$/i)) {
      appendHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600')
    }
  } 
  // Set standard Cache-Control for HTML pages
  else if (url.match(/\/$/) || url.match(/\.html$/)) {
    appendHeader(event, 'Cache-Control', 'public, max-age=3600, stale-while-revalidate=600')
  }

  // Add resource hints for improved LCP
  appendHeader(event, 'Link', '</assets/photos/mobile-screen.webp>; rel=preload; as=image; type=image/webp; fetchpriority=high')
  appendHeader(event, 'Link', '</svg/vector-7.svg>; rel=preload; as=image; type=image/svg+xml; fetchpriority=high')

  // Add CORS headers for critical assets
  appendHeader(event, 'Access-Control-Allow-Origin', '*')
  appendHeader(event, 'Timing-Allow-Origin', '*')

  // Add Server-Timing header to measure LCP
  appendHeader(event, 'Server-Timing', 'lcp;desc="Largest Contentful Paint"')
}) 