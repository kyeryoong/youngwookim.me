/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
