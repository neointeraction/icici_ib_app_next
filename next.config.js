const withImages = require("next-images");
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
            // {
            //   key: 'Content-Security-Policy',
            //   value: 'default-src *'
            // },
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

// const ContentSecurityPolicy = `
//   default-src 'self' localhost:* ws://localhost:*;
// `
