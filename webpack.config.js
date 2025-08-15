const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for the application
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /^\.js$/, // Define rules for JavaScript files
                exclude: /node_modules/, // Exclude node_modules from processing
                use: {
                    loader: 'babel-loader', // Use Babel for transpiling
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for Babel
                    },
                },
            },
            {
                test: /^\.css$/, // Define rules for CSS files
                use: ['style-loader', 'css-loader'], // Loaders for CSS
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // File extensions to resolve
    },
    devtool: 'source-map', // Enable source maps for debugging
};