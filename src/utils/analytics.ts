// Define types for analytics
interface WindowWithGtag extends Window {
  gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
}

// Simple analytics tracking
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // In a real application, you would send this to your analytics service
  console.log('Event tracked:', eventName, properties);
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as WindowWithGtag).gtag('event', eventName, properties);
  }
};

// User feedback collection
export const collectFeedback = async (
  type: 'bug' | 'feature' | 'improvement',
  message: string,
  userEmail?: string
) => {
  try {
    // In a real application, you would send this to your backend
    const feedback = {
      type,
      message,
      userEmail,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Example: Send to your API
    // await fetch('/api/feedback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(feedback),
    // });

    console.log('Feedback collected:', feedback);
    return true;
  } catch (error) {
    console.error('Error collecting feedback:', error);
    return false;
  }
};

// Performance monitoring
export const measurePerformance = (metricName: string, value: number) => {
  // In a real application, you would send this to your analytics service
  console.log('Performance metric:', metricName, value);
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as WindowWithGtag).gtag('event', 'performance_metric', {
      metric_name: metricName,
      value: value,
    });
  }
};

// User session tracking
export const trackUserSession = () => {
  const sessionId = Math.random().toString(36).substring(7);
  const startTime = new Date().toISOString();

  // Track session start
  trackEvent('session_start', {
    sessionId,
    startTime,
  });

  // Track session end when user leaves
  window.addEventListener('beforeunload', () => {
    const endTime = new Date().toISOString();
    trackEvent('session_end', {
      sessionId,
      startTime,
      endTime,
      duration: new Date(endTime).getTime() - new Date(startTime).getTime(),
    });
  });
};

// Error tracking
export const trackError = (error: Error, context?: Record<string, unknown>) => {
  // In a real application, you would send this to your error tracking service
  console.error('Error tracked:', error, context);
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as WindowWithGtag).gtag('event', 'error', {
      error_name: error.name,
      error_message: error.message,
      error_stack: error.stack,
      ...context,
    });
  }
}; 