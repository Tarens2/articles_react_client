import path from "path";
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.join(__dirname, '/client/index.js'),
        'webpack-hot-middleware/client?reload=true'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.svg$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}