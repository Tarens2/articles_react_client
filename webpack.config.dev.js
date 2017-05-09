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
                loaders: [ 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}