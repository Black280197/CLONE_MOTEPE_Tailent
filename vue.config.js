module.exports = {
  transpileDependencies: [],
  lintOnSave: false, // Disable ESLint during development
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // Use the full build with template compiler
      }
    }
  }
}
