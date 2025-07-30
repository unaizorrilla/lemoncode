const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const defaultPlugins = [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        scriptLoading: 'blocking',
        hash: true,
    }),
    new Dotenv({
        path: `./.env.${isProduction ? 'production' : 'development'}`,
        safe: true, // load '.env.example' to verify the '.env' variables are all set
    })];

    let config = {
        mode: argv.mode || 'development',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? 'js/[name].[contenthash].js' : 'js/bundle.js',
            clean: true, // Clean dist folder before each build
            // this is a global setting for asset modules
            // it defines where the assets will be placed in the output directory
            //assetModuleFilename: 'images/[hash][ext][query]'
        },
        resolve: {
            extensions: ['.ts', '.js'],
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
                    // this allow customize the path and file name for each specifed rule
                    generator: {
                        filename: 'images/[hash][ext][query]'
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        plugins: isProduction ? defaultPlugins : [...defaultPlugins, new BundleAnalyzerPlugin()],
        devServer: {
            port: 8080,
            open: true,
            hot: true,
            static: {
                directory: path.join(__dirname, "src"),
            },
        },
        // Source maps for better debugging
        devtool: isProduction ? 'source-map' : 'eval-source-map'
    };

    return config;
}