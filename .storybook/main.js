const path = require('path');

module.exports = {
  stories: ['../src/stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    // '@storybook/addon-info', // deprecated insteadof @storybook/addon-docs
    '@storybook/addon-controls', // 替代knobs
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        'babel-loader',
        'ts-loader',
      ]
    }, {
      test: /\.less$/,
      exclude: /node_modules|antd\.less/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              // 生成推荐去掉[local]
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          }
        },
        'less-loader'
      ]
    }, {
      test: /\.less$/,
      include: /node_modules|antd\.less/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
              sourceMap: true,
            }
          }
        }
      ]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        "style-loader",
        'css-loader',
      ]
    },
    // {
    //   test: /\.tsx?$/,
    //   use: [
    //     // 'babel-loader',
    //     'ts-loader',
    //     {
    //       loader: require.resolve("react-docgen-typescript-loader"),
    //       options: {
    //         tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
    //         shouldExtractLiteralValuesFromEnum: true,
    //         propFilter: (prop) => {
    //           if (prop.parent) {
    //             return !prop.parent.fileName.includes('node_modules')
    //           }
    //           return true            
    //         }
    //       }
    //     }
    //   ]
    // }
    )

    config.resolve.extensions.push('.ts', '.tsx', '.css', '.less');

    return config;
  }
};