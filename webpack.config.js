const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, 'dist'), // eslint-disable-line
    SRC: path.resolve(__dirname), // eslint-disable-line
    STATIC: path.resolve(__dirname, 'assets') // eslint-disable-line
}

module.exports = env => {
    const production  = env.NODE_ENV === 'production'
    const proxyAPIUrl = `${ production ? 'https' : 'http' }://localhost:8081`

    return {
        entry: {
            index: path.join(paths.SRC, 'index.js')
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
                target: proxyAPIUrl,
                secure: production
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
        mode: production ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
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
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(paths.SRC, 'assets/index.html'),
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }   
}
