const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './app/index.tsx',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9799'
    ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: 'http://localhost:9799/assets/', // directory for all packed files relative to the server home page
        filename: 'bundle.js',
        library: 'coup',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.js', '.json', '.ts', '.tsx', '.html', '.scss', '.css' ],
        modules: [ path.resolve(__dirname, 'app'),  './node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [ path.resolve(__dirname, 'app') ],
                exclude: [ path.resolve(__dirname, 'app', 'test') ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        noInfo: false,
        port: 9799,
        hot: true,
        contentBase: './app',
        quiet: false,
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Coup | Strategic Deception',
            filename: 'app/index.html',
            template: 'app/index.html'
        })
    ]
};
