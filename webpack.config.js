// npm process.env.NODE_ENV = 'development';

var loaders = require('./config/loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  });

module.exports = {
    devtool: 'eval',
	entry: ['./src/index.js'],
    plugins: [
            new ExtractTextPlugin('[name].css'),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            devFlagPlugin
    ],
	module: {
        loaders: [loaders.babelLoader,loaders.jsonLoader, loaders.lessLoader, loaders.sassLoader, loaders.htmlLoader, loaders.imageLoader]
    },
	devServer: {
		inline: true,
		contentBase:'./',
		port:3001
	},
	resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
}