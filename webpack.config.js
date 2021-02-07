const path = require('path');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
    ],

    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.js$/,
                use:'babel-loader'
              }
        ]
    }
}