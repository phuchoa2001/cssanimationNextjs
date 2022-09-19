/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
