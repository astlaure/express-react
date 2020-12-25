const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodeExternals = require('webpack-node-externals');

const client = {
    entry: './client/src/index.tsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve('bin/public'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env', { targets: { browsers: '>1%, not ie 11, not op_mini all' } }],
                        ],
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/assets/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devtool: 'source-map',
};

const server = {
    entry: './server/src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve('bin'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    target: 'node',
    externals: [NodeExternals()],
    node: {
        __dirname: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env', { targets: { node: 'current' } }],
                        ],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',
};

module.exports = [
    client,
    server,
];
