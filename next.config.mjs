// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

/** @type {{output: string, trailingSlash: boolean, images: {formats: (string)[]}, compress: boolean, reactStrictMode: boolean, compiler: {styledComponents: {ssr: boolean}}}} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  compress: true,
  output: 'export'
};

export default nextConfig;
