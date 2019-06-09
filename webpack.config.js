const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        library: 'reactUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GUUI - React',
            template: 'index.html'
        })
    ]
}