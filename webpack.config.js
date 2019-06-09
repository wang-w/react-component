const path = require('path')
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
    }
}