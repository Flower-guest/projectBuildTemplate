import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [
    ["flex", { display: "flex" }],
    ["pink", { color: "pink" }],
  ],
  shortcuts: {
    btn: "pink flex",
  },
});
