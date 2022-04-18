const withImages = require("next-images");
// const ContentSecurityPolicy = `
// style-src 'self' fonts.googleapis.com 'unsafe-inline'; 
// font-src 'self' fonts.gstatic.com data:; 
// default-src 'self'; 
// script-src 'unsafe-eval' 'self'; 
// img-src 'self' data: content:;  
// `
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'Content-Security-Policy',
              value:"style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self'; frame-src https://www.google.com; img-src 'self' data: content:; "
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            }  
        ]
      },
    ]
  },



});


