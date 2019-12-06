const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: path.join(__dirname, './src/javascript/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin ({
            template: './src/html/index.html',
            filename: "./index.html",
        })
    ]
};
