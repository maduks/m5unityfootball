/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Ensure webfonts are served correctly
  async headers() {
    return [
      {
        source: "/webfonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
