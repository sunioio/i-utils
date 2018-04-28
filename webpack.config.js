const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: `${pkg.name}.min.js`,
        path: resolve('dist'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {compact: false},
            }
        ]
    },
    resolve: {
        // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.es')
        extensions: ['.js', '.es','.es6']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        })
    ]
}