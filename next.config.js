/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}
