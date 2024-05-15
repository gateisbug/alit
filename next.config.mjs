/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = "alit";

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  // assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  compress: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/item',
  //     }
  //   ]
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/item',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
