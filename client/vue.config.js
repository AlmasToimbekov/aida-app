const config = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'cordova'
  }
}
if (process.env.NODE_ENV === 'development') {
  config.devServer = {
    proxy: `http://localhost:${process.env.PORT}`
  }
} else {
    config.devServer = {
      proxy: 'https://aida-aps.herokuapp.com'
    }
}

module.exports = config
