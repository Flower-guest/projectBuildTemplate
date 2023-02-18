/**
 * @name AutoRegistryComponents
 * @description  自动引入ui组件和自己分装的组件
 */
import Components from "unplugin-vue-components/vite"; //自动导入组件
import {
  AntDesignVueResolver, // AntDesignVue
  ElementPlusResolver, // ElementPlus
  NaiveUiResolver, //NaiveUi
  VueUseComponentsResolver, //VueUse
} from "unplugin-vue-components/resolvers";

const AutoRegistryComponents = () => {
  return Components({
    dirs: ["src/components"],
    dts: "types/components.d.ts",
    extensions: ["vue"],
    resolvers: [
      AntDesignVueResolver(),
      ElementPlusResolver(),
      NaiveUiResolver(),
      VueUseComponentsResolver(),
    ],
  });
};

export default AutoRegistryComponents;
