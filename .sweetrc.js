import path from 'path';
import process from 'process';

const isDevelopment: boolean = process.env.NODE_ENV === 'development';

export default {
  frame: 'react',
  dll: [
    'react',
    'prop-types',
    'react-dom',
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'redux-actions',
    'immutable',
    'redux-immutable',
    'reselect',
    'moment'
  ],
  entry: {
    app: [path.join(__dirname, 'src/app.js')]
  },
  externals: {
    hint: 'window.hint'
  },
  loaders: {
    svg: {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        { loader: 'babel-loader' },
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            icon: true,
          }
        }
      ]
    }
  },
  rules: [
    {
      test: /(dll\.js|weibo-pattlock)/,
      use: [{
        loader: 'file-loader',
        options: {
          name: isDevelopment ? '[name].[ext]' : '[hash:5].[ext]',
          outputPath: 'script/'
        }
      }]
    }
  ],
  js: {
    ecmascript: true,
    plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
    exclude: /(dll\.js|weibo-pattlock)/
  },
  sass: {
    include: /src/,
    publicPath: '../'
  },
  css: {
    modules: false,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    },
    include: /node_modules[\\/]_?antd/,
    publicPath: '../'
  },
  html: [{ template: path.join(__dirname, 'src/index.pug') }]
};