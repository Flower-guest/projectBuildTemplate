import {
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
    ['center', 'flex items-center justify-center'],
    ['center-between', 'flex items-center justify-between'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  rules: [
    [/^fs-(\d+)$/, ([, num]) => ({ 'font-size': `${num}px` })],
    [/^lh-(\d+)$/, ([, num]) => ({ 'line-height': `${num}px` })],
    [/^fc-(.+)$/, ([, color], { theme }) => {
      // 检查 color 是否是主题中定义的颜色
      const themeColor = theme.colors?.[color];

      return {
        color: themeColor || color, // 优先使用主题颜色，找不到则直接使用原始值
      };
    }],
  ],
  theme: {
    colors: {
      primary: '#4498A5',         // 主色
      'primary-light': '#2884C0', // 主色（浅蓝）
      success: '#4ADE80',         // 成功色
      'success-muted': '#21B96C', // 成功色（柔和绿色）
      warning: '#E6A23C',         // 警告色
      'warning-light': '#FACC15', // 警告色（亮黄色）
      danger: '#EF4444',          // 危险色
      info: '#2996F7',            // 信息色
      dark: '#1F2937',            // 深色
      'dark-muted': '#2E3744',    // 深色（柔和）
      'bg-dark': '#515863',       // 背景深灰色
      white: '#ffffff',           // 白色
    },
  },
  presets: [
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }) as any,
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    // presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
