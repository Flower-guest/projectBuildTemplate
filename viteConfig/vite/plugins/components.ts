/**
 * @name AutoRegistryComponents
 * @description  自动引入ui组件和自己分装的组件
 */
import Components from 'unplugin-vue-components/vite'; //自动导入组件
import {
  ElementPlusResolver, // ElementPlus
  VueUseComponentsResolver, //VueUse
} from 'unplugin-vue-components/resolvers';

const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'], //用于搜索组件的目录的相对路径。
    extensions: ['vue'], //组件的有效扩展
    deep: true, //search for subdirectories 搜索子目录
    dts: 'types/components.d.ts', //生成 `components.d.ts` 全局声明
    directoryAsNamespace: false, //允许子目录作为组件的命名空间前缀。
    globalNamespaces: [], // 忽略命名空间前缀的子目录路径。 当 `directoryAsNamespace: true` 时有效
    directives: true, //自动导入指令
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/], //用于转换目标的过滤器
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      ElementPlusResolver(),
      VueUseComponentsResolver(),
    ],
  });
};

export default AutoRegistryComponents;
