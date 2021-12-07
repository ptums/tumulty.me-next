module.exports = {
  image: {
    minimumCacheTTL: 60 * 60 * 5,
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
