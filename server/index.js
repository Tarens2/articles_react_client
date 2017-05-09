import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackComfig from '../webpack.config.dev';


let app = express();

let compiler = webpack(webpackComfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackComfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, ()=> console.log("Runnig on localhost:3000"));

