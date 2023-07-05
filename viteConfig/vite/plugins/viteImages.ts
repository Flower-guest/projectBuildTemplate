/**
 * @name ConfigImageminPlugin
 * @description 快速插件视图图像
 */
import ViteImages from 'vite-plugin-vue-images';

export default function ConfigViteImages() {
  return ViteImages({
    // Relative paths of image search directories
    dirs: ['src/assets/img'],

    // valid image extensions
    extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'],

    // Override default behavior of name -> image path resolution
    customResolvers: [],

    // Override Regex that searches for variables to replace. MUST include group
    customSearchRegex: '([a-zA-Z0-9]+)',
  });
}
