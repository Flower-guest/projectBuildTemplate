import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import proxy from './viteConfig/vite/proxy';
import { createVitePlugins } from './viteConfig/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_BASE_NAME } = loadEnv(mode, process.cwd(), '');

  const isBuild = command === 'build';

  return {
    base: VITE_BASE_NAME == 'prod' ? './' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: createVitePlugins(isBuild),
    server: {
      hmr: { overlay: false },
      port: 3000,
      open: false,
      cors: false,
      host: '0.0.0.0',
      proxy,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'element-plus-vendor': ['element-plus'],
            'icons-vendor': ['@element-plus/icons-vue'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variables.less";',
        },
      },
    },
  };
});
