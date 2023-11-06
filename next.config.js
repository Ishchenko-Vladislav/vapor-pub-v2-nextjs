/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL,
    DEV_MODE: process.env.DEV_MODE,
  },
};

module.exports = nextConfig;
