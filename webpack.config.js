var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/style.scss',
      Nav: 'app/components/Nav.jsx',
      Catering: 'app/components/Catering.jsx',
      Carosel: 'app/components/Carosel.jsx',
      Contact: 'app/components/Contact.jsx',
      About: 'app/components/About.jsx',
      Menu: 'app/components/Menu.jsx',
      Specials: 'app/components/Specials.jsx',
      ContactForm: 'app/components/ContactForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader',
        exclude: /(node_modules|bower_components)/
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
