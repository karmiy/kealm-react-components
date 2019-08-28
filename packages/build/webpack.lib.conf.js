const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const path = require('path');


module.exports = merge(baseConfig, {
    mode: "production",
    devtool: 'cheap-module-source-map', // 开启production调试
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDom',
    },
})
