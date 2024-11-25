/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite'; //自动导入api
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const AutoImportDeps = () => {
  return AutoImport({
    imports: ['vue', 'vue/macros', 'vue-router', 'pinia', '@vueuse/core'],
    // 在 Vue 模板中自动导入
    vueTemplate: true,
    dts: 'types/auto-imports.d.ts',
    resolvers: [ElementPlusResolver()],
  });
};

export default AutoImportDeps;
