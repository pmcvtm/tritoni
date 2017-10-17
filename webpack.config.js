module.exports = {
    target: 'electron',

    entry: {
        index: './src/index.ts',
        app: './src/app.tsx',
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
        extensions: ['webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.html']
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\index.html$/, loader: 'file-loader?name=index.html'}
        ]
    }
}
