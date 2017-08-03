const path = require('path');

module.exports = {
	entry: './src/Index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist'
	},
	module: {
		rules: [
    		{ 
    			test: /\.js$/,
    			exclude: /node_modules/,
    			use:[
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015','react']
                    }}
                ]
    		},
    		{ 
    			test: /\.css$/,
    			use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]  			
    		}
  		]
	}
}
	