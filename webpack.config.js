/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 */

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
};
