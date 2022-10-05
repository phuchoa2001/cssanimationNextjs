/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();



module.exports = removeImports({
  experimental: { esmExternals: true },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
});
