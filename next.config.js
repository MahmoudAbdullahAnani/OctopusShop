/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "fakestoreapi.com",
      "tailwindui.com",
    ],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: "/api/Home",
      //   destination: "/",
      //   permanent: true,
      // },
      {
        source: "/i18n",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
