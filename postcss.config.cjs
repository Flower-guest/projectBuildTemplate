module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 192, // 设计稿宽度的1/ 10
      propList: ["*", "!border", ".el-carousel"], // 除 border 外所有px 转 rem
      selectorBlackList: [
        ".el-",
        ".distance-",
        ".mars3d-compass",
        ".mars3d-compass-",
        ".mars3d-camera-content",
        ".mars3d-gradient",
      ], // 过滤掉.el-开头的class，不进行rem转换
    },
  },
};
