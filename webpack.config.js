import { resolve } from 'path';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
const autoprefixer = require('autoprefixer');

export const entry = './src/index.js';
export const output = {
    path: resolve('dist'),
    filename: 'bundle.js'
};
export const module = {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
    },

    {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers:['ie >= 8', 'last 4 version']
                        })
                    ],
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    }
    ]
};
export const plugins = [
    new ExtractTextPlugin('./src/index.scss')
];

