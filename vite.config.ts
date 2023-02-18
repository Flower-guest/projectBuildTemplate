import { defineConfig, loadEnv } from "vite";
import path from "path";
import { VITE_PORT } from "./viteConfig/constant";
import proxy from "./viteConfig/vite/proxy";
import { createVitePlugins } from "./viteConfig/vite/plugins";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_BASE_NAME } = loadEnv(mode, process.cwd(), "");
  const isBuild = command === "build";
  return {
    base: VITE_BASE_NAME == "prod" ? "./" : "/",
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: "0.0.0.0", // IP配置，支持从IP启动
      proxy,
    },
    resolve: {
      // 配置别名
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: createVitePlugins(isBuild),
  };
});
