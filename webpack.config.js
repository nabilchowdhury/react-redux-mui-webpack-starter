const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {
    const isProd = options.mode === 'production'
    return {
        output: {
            publicPath: '',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: ['@babel/transform-runtime'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.ejs',
                filename: 'index.html',
            }),
        ],
        devServer: {
            disableHostCheck: true,
            historyApiFallback: true,
        },
    }
}
