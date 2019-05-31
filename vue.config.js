module.exports = {
    chainWebpack: config => {
        //配置svg使用方式
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        //移除prefetch插件
        config.plugins.delete('prefetch')

    },
}