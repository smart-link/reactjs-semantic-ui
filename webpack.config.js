module.exports = {
	entry: {
		'reactjs-semantic-ui': './src/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].js',
		library: 'RSU',
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
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|svg|eot|woff|woff2|ttf)$/,
				loader: 'url-loader?limit=8192'
			} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
	},

	externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};
