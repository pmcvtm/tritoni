module.exports = {
    target: 'electron',

    entry: {
        index: './src/index.ts',
        renderer: './src/renderer.ts'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    devtool: "source-map",
    node: {
        __dirname: false
    },

    resolve: {
        extensions: ['webpack.js', '.web.js', '.ts', '.js', '.html']
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\index.html$/, loader: 'file-loader?name=index.html'}
        ]
    }
}
