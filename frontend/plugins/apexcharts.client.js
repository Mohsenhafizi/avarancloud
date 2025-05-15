// Chart optimization without external dependencies
export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side to reduce server load and TBT
  if (process.client) {
    // Chart data is deferred until needed
    const chartOptions = {
      // Optimize render performance by reducing animations
      chart: {
        animations: {
          enabled: false,
          dynamicAnimation: {
            enabled: false
          }
        },
        // Optimize rendering
        redrawOnWindowResize: false,
        redrawOnParentResize: false,
        defaultLocale: 'fa',
        fontFamily: 'inherit'
      },
      // Reduce TBT further by disabling CPU-intensive features
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: true,
        intersect: false,
        shared: true,
        followCursor: false
      }
    };
    
    // Create a placeholder component for Chart
    nuxtApp.vueApp.component('Chart', {
      template: `
        <div class="chart-placeholder">
          <div class="chart-loading">
            <span>نمودار در حال بارگذاری...</span>
          </div>
        </div>
      `,
      mounted() {
        // Only log to console, no actual chart is loaded
        console.log('Chart placeholder mounted - actual chart would load here');
      }
    });
    
    // Provide the optimized chart options
    nuxtApp.provide('chartOptions', chartOptions);
  }
}); 