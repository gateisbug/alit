/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = "alit";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  compiler: {
    styledComponents: {
      ssr: true
    }
  }
};

export default nextConfig;
