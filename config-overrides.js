const {
    override,
    addWebpackAlias,
    addLessLoader,
    fixBabelImports,
    setWebpackPublicPath
} = require('customize-cra');
const path = require('path');

const webpackConfig = () => config => {
    config.output.publicPath = './react-admin-antd'
    return config
}

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
    }),
    setWebpackPublicPath('react-admin-antd'),
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
    webpackConfig()
)
