import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";  //自动导入组件
import AutoImport from 'unplugin-auto-import/vite' //自动导入api
import Pages from "vite-plugin-pages" //自动创建路由
import eslintPlugin from 'vite-plugin-eslint' //导入包
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    // 不用写`ref`语法糖`.value`的方法
    vue({
      reactivityTransform: true
    }),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    // 自动引入api
    AutoImport({
      imports: ['vue', "vue/macros", 'vue-router', "pinia"],
      // 在 Vue 模板中自动导入
      vueTemplate: true,
      dts: 'types/auto-imports.d.ts',
    }),
    // 自动引入ui组件和自己分装的组件
    Components({
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
      extensions: ['vue'],
      resolvers: [AntDesignVueResolver()],
    }),
    Pages({
      // 自动读取src/views下的vue文件，生成路由信息，默认路由路径'/‘
      dirs: [{ dir: "src/views", baseRoute: "/" }],
      // 异步方式加载路由组件
      importMode: "async",
    })
  ],
});
