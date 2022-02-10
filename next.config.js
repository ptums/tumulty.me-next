module.exports = {
  productionBrowserSourceMaps: true,
  image: {
    minimumCacheTTL: 60 * 60 * 5,
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
