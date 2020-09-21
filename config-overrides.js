const {
    override,
    addWebpackAlias,
    addLessLoader,
    fixBabelImports,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        style: true
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {}
        }
    }),
)
