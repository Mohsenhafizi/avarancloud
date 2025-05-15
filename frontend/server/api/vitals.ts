import { defineEventHandler, readBody } from 'h3';
import { appendFile } from 'fs/promises';
import { join } from 'path';

/**
 * API endpoint for collecting Core Web Vitals data
 * This helps track TBT, LCP and other metrics for optimization
 */
export default defineEventHandler(async (event) => {
  try {
    // Get request body containing vitals data
    const body = await readBody(event);
    
    // Required fields
    const requiredFields = ['metric', 'value', 'page', 'timestamp'];
    
    // Validate request
    if (!body || !requiredFields.every(field => field in body)) {
      return {
        success: false,
        message: 'Missing required fields'
      };
    }
    
    // Validate metric type
    const validMetrics = ['TBT', 'LCP', 'CLS', 'FID', 'INP', 'TTFB'];
    if (!validMetrics.includes(body.metric)) {
      return {
        success: false,
        message: 'Invalid metric type'
      };
    }
    
    // Format data for storage
    const logEntry = JSON.stringify({
      metric: body.metric,
      value: body.value,
      page: body.page,
      userAgent: body.userAgent || event.node.req.headers['user-agent'],
      timestamp: body.timestamp || new Date().toISOString(),
      connection: body.connection || 'unknown',
      deviceType: body.deviceType || 'unknown'
    }) + '\n';
    
    // Log to file (in production, you might want to use a database)
    const logPath = join(process.cwd(), 'logs', 'web-vitals.log');
    await appendFile(logPath, logEntry).catch(() => {
      // If logging directory doesn't exist, create it (simplified handling)
      console.error('Could not write to vitals log file');
    });
    
    // Return success
    return {
      success: true,
      message: 'Web vitals recorded successfully'
    };
  } catch (error) {
    console.error('Error recording web vitals:', error);
    
    // Return error response
    return {
      success: false,
      message: 'Failed to record web vitals'
    };
  }
}); 