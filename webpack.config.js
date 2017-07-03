const path = require('path');

module.exports = {
    context: path.join(__dirname + '/src/main/js'),
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devtool: 'cheap-source-map',

    devServer: {
        contentBase: './src/main/js',
        publicPath: '/output'
    }
};