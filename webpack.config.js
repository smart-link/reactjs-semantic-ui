module.exports = {
	entry: {
		'reactjs-semantic-ui': './src/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].js',
		library: 'ReactSemanticUI',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
            },
			{
				test: /\.css$/,
                exclude: /\.useable\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
	}
};
