module.exports = {
    chainWebpack: config => {
        //移除prefetch插件
        config.plugins.delete('prefetch')

    },
}