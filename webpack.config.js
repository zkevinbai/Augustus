const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/Augustus.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                // react-quill-new ships ESM that imports 'react/jsx-runtime'
                // without an extension; React 16 has no "exports" map for it.
                test: /\.m?js$/,
                resolve: { fullySpecified: false }
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map'
};