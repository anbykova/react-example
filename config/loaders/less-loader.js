var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
module.exports = {
                exclude:/node_modules/,
                test: /\.less$/,
                use: extractLESS.extract([ 'style-loader', 'css-loader', 'less-loader' ])
             }