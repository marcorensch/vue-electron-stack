const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      mainProcessFile: "src/background.js",
      externals: [ ],
      // Or, for multiple preload files:
      // preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
      builderOptions:{
        // "appId": "com.appname.app",
        // "productName": "APP NAME",
        // "copyright": "Copyright ©YYYY company"
      },
    }
  }
})
