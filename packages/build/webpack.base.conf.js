const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HappyPack = require('happypack'); // 开启子线程并发处理任务
const os = require('os');
const HappyPackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css

module.exports = {
    context: path.resolve(__dirname, '../'), // 配置上下文，当遇到相对路径时，会以context为根目录
    entry: ['./src/index.jsx'],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        alias: {
            '@': path.join(__dirname, '..', 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/, // 使用正则来匹配 js 文件
                exclude: /node_modules/, // 排除依赖包文件夹
                use: [
                    {
                        // 一个loader对应一个id
                        loader: "happypack/loader?id=hpBabel"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/, // 针对 .css 后缀的文件设置 loader
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    'sass-loader' // 使用 sass-loader 将 scss 转为 css
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // 压缩 jpg/jpeg 图片
                            mozjpeg: {
                                progressive: true,
                                quality: 65 // 压缩率
                            },
                            // 压缩 png 图片
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            // 压缩 gif 图片
                            gifsicle: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].min.[ext]',
                            limit: 5000,
                            publicPath: 'fonts/',
                            outputPath: 'styles/fonts/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HappyPack({
            // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
            id:'hpBabel',
            // 如何处理.js文件，用法和Loader配置中一样
            loaders:['babel-loader?cacheDirectory'],
            threadPool: HappyPackThreadPool,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/index.min.css',
            chunkFilename: 'styles/[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), //用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给 cssProcessor 的选项，默认为{}
            canPrint: true //布尔值，指示插件是否以将消息打印到控制台，默认为 true
        }),
    ]
}

