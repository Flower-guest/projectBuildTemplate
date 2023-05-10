import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";
// import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  // transformers: [transformerDirectives()],
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [],
  rules: [],
});
