/** @type {import('next').NextConfig} */
const nextConfig = {experimental: {
    serverActions: true,
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },};

export default nextConfig;
