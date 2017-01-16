var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    debug: true
};
