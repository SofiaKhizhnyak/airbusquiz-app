/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Fix ChunkLoadError on the client-side
    if (!isServer) {
      config.output.publicPath = `/_next/`;
    }
    return config;
  },
};

export default nextConfig;
