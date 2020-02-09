const path = require('path')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const sass = require('sass')

module.exports = withCss(withSass({
    cssModules: true,
    sassLoaderOptions: {
        implementation: sass
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'components': path.resolve(__dirname, 'components/'),
            'pages': path.resolve(__dirname, 'pages/'),
            'store': path.resolve(__dirname, 'store/'),
            'assets': path.resolve(__dirname, 'assets/'),
            'utils': path.resolve(__dirname, 'utils/'),
            'plugins': path.resolve(__dirname, 'plugins/')
        }
        return config
    }
}))
