// Hash Navigation Plugin
// This plugin adds smooth scrolling for anchor links with proper header offset

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('page:finish', () => {
      // Process hash on initial page load (with delay to ensure DOM is ready)
      setTimeout(() => {
        if (window.location.hash) {
          handleHashNavigation(window.location.hash);
        }
      }, 500);
      
      // Handle click on hash links
      document.querySelectorAll('a[href*="#"]').forEach(link => {
        link.addEventListener('click', (event) => {
          const href = link.getAttribute('href');
          if (!href) return;
          
          if (href.includes('#')) {
            const [path, hash] = href.split('#');
            const currentPath = window.location.pathname;
            
            // If we're on the same page, handle the scrolling manually
            if (path === currentPath || (path === '/' && currentPath === '/') || path === '') {
              event.preventDefault();
              
              // Small delay to ensure menu closes first (especially on mobile)
              setTimeout(() => {
                handleHashNavigation(`#${hash}`);
                
                // Update URL without page reload
                history.pushState(null, '', href);
              }, 100);
            }
          }
        });
      });
    });
  }
});

// Helper function to handle hash navigation with proper offset
function handleHashNavigation(hash: string) {
  // Remove the # from the hash
  const id = hash.substring(1);
  const targetElement = document.getElementById(id);
  
  if (targetElement) {
    // Get header height dynamically
    const header = document.querySelector('header');
    // Use a larger default offset if header can't be found
    const headerOffset = header ? header.clientHeight + 20 : 120;
    
    // Calculate position
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    // First scroll quickly to approximately the right position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'auto'
    });
    
    // Then after a small delay, do a smooth fine adjustment if needed
    setTimeout(() => {
      const newElementPosition = targetElement.getBoundingClientRect().top;
      if (Math.abs(newElementPosition) > 30) { // Only adjust if we're off by more than 30px
        window.scrollBy({
          top: newElementPosition - headerOffset,
          behavior: 'smooth'
        });
      }
    }, 100);
    
    return true;
  }
  
  return false;
}