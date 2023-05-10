/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 */

import progress from 'vite-plugin-progress';
const ConfigProgressPlugin = () => {
  return progress();
};
export default ConfigProgressPlugin;
