'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const minimizeTrait = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};

const ra = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.node.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: {
    ramda: 'ramda',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '4',
                },
                forceAllTransforms: true,
              },
            ],
          ],
        },
      },
    ],
  },
};

const raMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve('./dist'),
      filename: 'RA.node.min.js',
      libraryTarget: 'umd',
      library: 'RA',
    },
    externals: {
      ramda: 'ramda',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '4',
                  },
                  forceAllTransforms: true,
                },
              ],
            ],
          },
        },
      ],
    },
  },
  minimizeTrait
);

const raWeb = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: {
    ramda: 'R',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: true,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true,
              },
            ],
          ],
        },
      },
    ],
  },
};

const raWebMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'RA.web.min.js',
      libraryTarget: 'umd',
      library: 'RA',
    },
    externals: {
      ramda: 'R',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true,
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-modules-commonjs',
                {
                  loose: true,
                },
              ],
            ],
          },
        },
      ],
    },
  },
  minimizeTrait
);

const raWebStandalone = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.standalone.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: true,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true,
              },
            ],
          ],
        },
      },
    ],
  },
};

const rawWebStandaloneMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'RA.web.standalone.min.js',
      libraryTarget: 'umd',
      library: 'RA',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true,
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-modules-commonjs',
                {
                  loose: true,
                },
              ],
            ],
          },
        },
      ],
    },
  },
  minimizeTrait
);

module.exports = [
  ra,
  raMin,
  raWeb,
  raWebMin,
  raWebStandalone,
  rawWebStandaloneMin,
];
