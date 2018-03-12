// npm process.env.NODE_ENV = 'development';

var loaders = require('./config/loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var babelPluginGraphqlTag = require('babel-plugin-graphql-tag');
var webpack = require('webpack');
var path = require('path');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
    __REDUX_TOOLS__: JSON.stringify(JSON.parse(process.env.REDUX_TOOLS || 'false'))
});

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3001";

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/index.js'        
    ],
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        //publicPath: '/',
        //chunkFilename: 'js/[id].chunk.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(), for production
            devFlagPlugin,
            new ExtractTextPlugin('[name].css'),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                // files: {
                //     css: ['style.css'],
                //     js: [ "bundle.js"],
                // }
            }),
            new webpack.HotModuleReplacementPlugin(),   
    ],
	module: {
        loaders: [loaders.babelLoader,loaders.jsonLoader, loaders.lessLoader, loaders.sassLoader, loaders.htmlLoader, loaders.imageLoader, loaders.graphqlLoader]
    },
	devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: false,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
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