const config = require('../config')

module.exports = {
  entry: {
    bundle: './src/index',
    framework: ['react', 'react-dom', 'react-router', 'redux']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
              ? config.build.assetsPublicPath
              : config.dev.assetsPublicPath,
  }
}