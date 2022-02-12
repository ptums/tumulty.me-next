module.exports = {
  productionBrowserSourceMaps: true,
  image: {
    minimumCacheTTL: 31536000,
    deviceSizes: [639, 767, 1023, 1279, 1535],
    imageSizes: [320, 480, 640, 768, 924, 1180, 1436],
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
