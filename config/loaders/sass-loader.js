var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
module.exports = {
                    test: /.s?css$/,
                    use: extractCSS.extract([ 'style-loader', 'css-loader', 'sass-loader' ])
                 }