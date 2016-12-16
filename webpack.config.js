module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'//添加对样式表的处理
      },
      {
        test: /\.(png|jpg)$/,
　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  devServer:  {
    contentBase: './public',
    color: true,
    port:8181,
    historyApiFallback: true,
    inline: true
  }
}