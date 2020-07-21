module.exports = {
  "devServer": {
    proxy: `http://localhost:${process.env.PORT || 3000}`
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/',
}