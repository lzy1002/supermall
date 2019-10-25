module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,  //视窗的宽度
      viewportHeight: 667,  //视窗的高度
      unitPrecision: 5,  //指定px单位转化为vw单位保留的小数
      viewportUnit: "vw",  //指定需要转换成的视窗单位  推荐vw
      selectorBlackList: [],  //指定不需要转换的类
      minPixelValue: 1,  //小于或等于1px不转换为视窗单位
      mediaQuery: false,  //是否允许在媒体查询中转换为px单位
      exclude: [/TabBar/]  //指定不转换为视窗单位的文件 内部要写入正则来匹配对应的文件名
    }
  }
};
