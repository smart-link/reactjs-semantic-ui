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
        loader: 'babel'
      }
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
