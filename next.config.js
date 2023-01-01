/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar"
  },
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
