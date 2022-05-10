/**
 * @file config-overrides.js
 * @author liuwenlong
*/

/* eslint-disable */
const {
    override,
    addWebpackAlias,
} = require('customize-cra');
const version = Date.now();
const path = require("path");

process.env.REACT_APP_SENTRY_RELEASE_VERSION = version;

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, './src'),
    }),
);
