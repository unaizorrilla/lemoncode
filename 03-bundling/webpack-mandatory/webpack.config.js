const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    let config = {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                // loader for html ( this transform for example the <img> tag)
                {
                    test: /\.(html)$/,
                    use: ['html-loader']
                },
                // just a loader for CSS  and SCSS files
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                // assest resource for images
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'blocking',
            hash: true,
        })],
        devServer: {
            port: 8080,
            open: true,
            hot: true,
            static: {
                directory: path.join(__dirname, "src"),
            },
        },
    };

    return config;
}