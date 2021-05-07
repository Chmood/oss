/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  // See: https://cli.vuejs.org/config/#vue-config-js

  // Global SCSS styles
  // See: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
  // See: https://stackoverflow.com/questions/54158207/how-do-i-add-a-global-scss-file-in-vue-js-that-will-compile
  css: {
    loaderOptions: {
      sass: {
          prependData: `
          @import "@/assets/scss/main.scss";
          `
      }
    }
  }
}
