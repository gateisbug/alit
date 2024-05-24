/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp']
  },

  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  compress: true,

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/item',
      },
      {
        source: '/item/:category',
        destination: '/item',
      }
    ]
  },
};

export default nextConfig;
