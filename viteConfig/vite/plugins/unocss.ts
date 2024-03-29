import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';
// import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  // exclude: ['node_modules', '.git', '.husky', '.vscode', 'build', 'dist', 'public'],
  // transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [],
  rules: [],
});
