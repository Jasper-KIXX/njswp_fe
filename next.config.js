/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const images = {
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['localhost::8888'],
  },
}

module.exports = { nextConfig, images }