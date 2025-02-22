/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["randomuser.me"],
      },
      webpack: (config) => {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@react-pdf/renderer': '@react-pdf/renderer/lib/esm',
        };
        return config;
      },
};

export default nextConfig;
