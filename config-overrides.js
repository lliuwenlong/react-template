/**
 * @file config-overrides.js
 * @author liuwenlong
*/

/* eslint-disable */
const {
    override,
    addWebpackAlias,
    addWebpackPlugin
} = require('customize-cra');

const StyleLintPlugin = require('stylelint-webpack-plugin');
const version = Date.now();
const path = require("path");

process.env.REACT_APP_SENTRY_RELEASE_VERSION = version;

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, './src'),
    }),
    addWebpackPlugin(
        new StyleLintPlugin({
            files: ['src/**/*.{html,css,less,scss,sass}'],
            fix: false,
            cache: false,
            emitError: true,
            failOnError: false
        })
    )
);
