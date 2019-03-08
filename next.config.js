const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');



  // cssModules: true,


const typescriptConfig = withTypescript();



module.exports = withTypescript(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    //scope类名生成规则 如.top-header__WiWZf 将不会污染全局样式
    localIdentName: '[local]__[hash:base64:5]'
  },
  sassLoaderOptions: {
    includePaths: ['styles']
  }
}));
