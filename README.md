<p align="center">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite3.1-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier">
    <img src="https://img.shields.io/badge/-Less-1D365D?logo=less&logoColor=white" alt="Less">
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
├── src
│    ├── api             // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
│    ├── page            // 业务页面
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── App.vue         // vue模板入口
│    ├── main.ts         // vue模板js
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


## 📱 支持`Pinia` ,下一代`Vuex5`

创建文件`src/store/index.ts`

```typescript
// 支持模块化，配合plop可以通过命令行一键生成
import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';
const pinia = createPinia();
export { useUserStore };
export default pinia;
```

创建文件`src/store/modules/user/index.ts`

```typescript
import { defineStore } from 'pinia';
import piniaStore from '@/store';
export const useUserStore = defineStore(
  // 唯一ID
  'user',
  {
    state: () => ({}),
    getters: {},
    actions: {},
  },
);
```

## 📦 支持`axios(ts版)`

已封装了主流的拦截器，请求调用等方法，区分了模块`index.ts`/`status.ts`/`type.ts`

```typescript
//封装src/api/user/index.ts
import request from '@utils/http/axios';
import { IResponse } from '@utils/http/axios/type';
import { ReqAuth, ReqParams, ResResult } from './type';
enum URL {
  login = '/v1/user/login',
  permission = '/v1/user/permission',
  userProfile = 'mock/api/userProfile',
}
const getUserProfile = async () => request<ReqAuth>({ url: URL.userProfile });
const login = async (data: ReqParams) => request({ url: URL.login, data });
const permission = async () => request<ReqAuth>({ url: URL.permission });
export default { getUserProfile, login, permission };
```

```typescript
//调用
import userApi from '@api/user';
// setup模式下组件可以直接引用
const res = await userApi.profile();
```

## 👽 自动生成`router`，过滤`components`组件

支持`vue-router4.0`的模块化，通过检索 pages 文件夹可自动生成路由，并支持动态路由

```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import routes from 'virtual:generated-pages';

console.log(routes, '打印生成自动生成的路由');
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
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
