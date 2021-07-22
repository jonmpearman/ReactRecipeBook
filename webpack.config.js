const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'recipebook.js',
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // needed during local development of warlock-ui component library
        alias: {
            'react': path.resolve('../warlock-ui/node_modules/react')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html'}),
    ]
};