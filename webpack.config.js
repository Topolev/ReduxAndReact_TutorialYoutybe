var path = require("path");

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    devServer: {
        inline: true,
        contentBase: './public'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}