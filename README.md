<p align="center">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite3.1-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier">
    <img src="" alt="">
</p>

一个开箱即用，快速搭建大型应用的 Vue3 + Vite3 + TypeScript+...模板框架。集成了各类插件，并进行了模块化和按需加载的优化，可以放心使用。


## 代码规范

- 结合 VsCode 编辑器（保存时自动执行格式化：editor.formatOnSave: true）
- 配合 commitizen，使代码提交更加规范。
- ESLint 配置（`.eslintrc.js` ）详细请看对应的配置文件。

## 目录结构

以下是系统的目录结构

```
├── viteConfig           //vite配置文件
├── src
│    ├── service         // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
│    ├── pages           // 业务页面
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── App.vue
│    ├── main.ts
├── .d.ts                // 类型定义
├── tsconfig.json        // ts配置
└── vite.config.ts       // vite全局配置
```


## 🎸UI 组件按需加载，自动导入

```typescript
//模块化写法
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
 Components({
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
      extensions: ['vue'],
      resolvers: [AntDesignVueResolver()],
    }),
```

## 🎸API自动导入

```typescript
//模块化写法
import AutoImport from 'unplugin-auto-import/vite' //自动导入api
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
  AutoImport({
      imports: ['vue', "vue/macros", 'vue-router', "pinia"],
      // 在 Vue 模板中自动导入
      vueTemplate: true,
      dts: 'types/auto-imports.d.ts',
    }),
```

# 使用

```shell
# 拉取仓库代码
git clone  https://github.com/Flower-guest/ProjectBuildTemplate.git

# 进入项目文件夹
cd ProjectBuildTemplate

# 安装项目依赖
pnpm install

# 运行
pnpm run dev
```
