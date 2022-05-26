
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
      "/apis/": {
        target: "http://localhost:1024",
        changeOrigin: true,
        pathRewrite: {
          "^/apis": "" // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
      }
    }
  },
})