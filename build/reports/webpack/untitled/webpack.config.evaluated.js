{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/mohammed/IdeaProjects/untitled/build/js/packages/untitled/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/mohammed/IdeaProjects/untitled/build/js/packages/untitled/kotlin-dce/untitled.js'
    ]
  },
  output: {
    path: '/Users/mohammed/IdeaProjects/untitled/build/distributions',
    filename: [Function: filename],
    library: 'untitled',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/mohammed/IdeaProjects/untitled/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}