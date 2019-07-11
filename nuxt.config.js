module.exports = {
  css: [
    "~assets/master.sass"
  ],
  plugins: [
    { src:"~plugins/uikit.js", ssr: false}
  ],
  srcDir: __dirname + "/app",
  build: {
    extend(config, { isClient, loaders: { imgUrl } }){
      imgUrl.name = 'img/[name].[hash:7].[ext]'
    }
  }
}