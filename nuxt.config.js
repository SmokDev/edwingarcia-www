module.exports = {
  srcDir: __dirname + "/app",
  build: {
    extend(config, { isClient, loaders: { imgUrl } }){
      imgUrl.name = 'img/[name].[hash:7].[ext]'
    }
  }
}
