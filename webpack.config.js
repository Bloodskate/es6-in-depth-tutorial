var path = require('path');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,

            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, "build"),
        inline: true,
        compress: true
    }
}
