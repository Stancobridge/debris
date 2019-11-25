const path = require("path")

module.exports = {

    mode: "development",
    
    entry :  "./app/src/index.js",
    
    output: {
        filename: "app.raw.js",
        path: path.resolve(__dirname, "./app/public/assets/js")
    },

    devServer: {
        contentBase: path.join(__dirname, '/app'),
        compress: true,
        hot: true,
        port: 9000
      }

}
