var path = require('path');
module.exports = {
                test:/.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				include: path.join(__dirname, '..', '..', 'src'),
				query:{
					presets: ["es2015", "react"],
					plugins: ["react-hot-loader/babel",
							//   'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'
							 ],
				}
}