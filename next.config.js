/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/i18n",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
