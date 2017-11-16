// npm process.env.NODE_ENV = 'development';

var loaders = require('./config/loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
    __REDUX_TOOLS__: JSON.stringify(JSON.parse(process.env.REDUX_TOOLS || 'false'))
});

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
            devFlagPlugin,
            new ExtractTextPlugin('[name].css'),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
    ],
	module: {
        loaders: [loaders.babelLoader,loaders.jsonLoader, loaders.lessLoader, loaders.sassLoader, loaders.htmlLoader, loaders.imageLoader]
    },
	devServer: {
		inline: true,
        contentBase:'./',
        hot: true,
        port:3001,
        historyApiFallback: true,
    },
	resolve: {    
        alias: {
            'redux-devtools/lib': path.join(__dirname, 'node_modules', 'redux-devtools', 'lib'),
            'redux-devtools': path.join(__dirname, 'node_modules', 'redux-devtools'),
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.json', '.jsx']
    }
}