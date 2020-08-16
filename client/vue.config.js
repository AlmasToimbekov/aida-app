const config = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/',
}
if (process.env.NODE_ENV === 'development') {
  config.devServer = {
    proxy: `http://localhost:${process.env.PORT}`
  }
}

module.exports = config