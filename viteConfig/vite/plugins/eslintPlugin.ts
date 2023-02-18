/**
 * @name ConfigEslintPlugin
 * @description 增加下面的配置项,这样在运行时就能检查eslint规范
 */
import eslintPlugin from "vite-plugin-eslint"; //导入包

const ConfigEslintPlugin = () => {
  return eslintPlugin({
    include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
  });
};

export default ConfigEslintPlugin;
