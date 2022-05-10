/**
 * @file config-overrides.js
 * @author liuwenlong
*/

/* eslint-disable */
const {
    override,
    addPostcssPlugins,
    fixBabelImports,
    addWebpackAlias,
    setWebpackPublicPath,
    addWebpackPlugin,
} = require('customize-cra');
const pxToViewport = require('./script/pxToViewport.config');
const version = Date.now();
const publicPath = '/management-control';
const path = require("path");

process.env.REACT_APP_SENTRY_RELEASE_VERSION = version;

module.exports = override(
    addPostcssPlugins([
        pxToViewport
    ]),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        "@": path.resolve(__dirname, './src'),
    }),
    process.env.NODE_ENV === 'production' && setWebpackPublicPath(publicPath),  
);
