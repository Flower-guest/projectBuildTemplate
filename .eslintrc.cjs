module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "",
        next: "function",
      }, // 函数前填充空行
      {
        blankLine: "always",
        prev: "",
        next: "export",
      }, // export前填充空行
      {
        blankLine: "always",
        prev: "",
        next: "block",
      }, // {} 前换行
      {
        blankLine: "always",
        prev: "",
        next: "block-like",
      }, // {} 前换行
      {
        blankLine: "always",
        prev: "",
        next: "expression",
      },
      {
        blankLine: "always",
        prev: "",
        next: "multiline-block-like",
      }, // 多类{}前填充空行
      {
        blankLine: "always",
        prev: "multiline-let",
        next: "",
      }, // 多个let后空行
      {
        blankLine: "always",
        prev: "multiline-const",
        next: "",
      }, // 多个cont后空行
      {
        blankLine: "always",
        prev: "const",
        next: "",
      }, // 多个cont后空行
      {
        blankLine: "always",
        prev: "import",
        next: "",
      }, // 每个import后空行
    ],
    "no-multiple-empty-lines": [1, { max: 1 }]
  },
};
