const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, 'dist'), // eslint-disable-line
    SRC: path.resolve(__dirname), // eslint-disable-line
    STATIC: path.resolve(__dirname, 'assets') // eslint-disable-line
}

module.exports = env => ({
    entry: {
        index: path.join(paths.SRC, 'components/Index.jsx')
    },
    devServer: {
        contentBase: paths.SRC,
        hot: true,
        inline: true,
        progress: true,
        proxy: [{
            context: [
                '/api/**'
            ],
            target: 'http://localhost:8081'
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            paths.SRC,
            path.resolve('./node_modules')
        ]
    },
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    mode: env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include: paths.SRC,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|svg)$/,
                include: paths.STATIC,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(css)(\?.*$|$)/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use: [
                    { loader: 'url-loader?limit=100000' }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'assets/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})
