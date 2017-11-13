module.exports = {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        query: 'name=images/[name].[ext]'
};

        //   'file?hash=sha512&digest=hex&name=[hash].[ext]',
        //   'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        // loader: 'file-loader?name=assets/[name].[hash].[ext]'