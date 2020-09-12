module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  //生成的生产环境构建文件的目录
  outputDir: "bjm",
  //静态资源 (js、css、img、fonts) 目录 (相对于 outputDir 的)
  assetsDir: "assets",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: "index.html",
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: true,
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: false,
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    port: 3000,
    proxy: {
      "^/api": {
        target: "http://221.237.182.249:8101/dev/api/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },

  // chainWebpack: config => {
  //   // less Loader
  //   config.module
  //     .rule("less")
  //     .test(/\.less$/)
  //     .use("less-loader")
  //     .loader("less-loader")
  //     .end()
  //     .use("style-loader")
  //     .loader("style-loader")
  //     .end()
  //     .use("css-loader")
  //     .loader("css-loader")
  //     .end();
  //   config.module
  //     .rule("md")
  //     .test(/\.md/)
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .end()
  //     .use("vue-markdown-loader")
  //     .loader("vue-markdown-loader/lib/markdown-compiler")
  //     .options({
  //       raw: true
  //     });
  // },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `@import "~@/styles/variables.scss";@import "~@/styles/mixin.scss";`
      },
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#187f7b",
            "link-color": "#187f7b",
            "time-picker-selected-bg": "#0f534d"
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
