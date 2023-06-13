module.exports = {
  printWidth: 140, // 一行的字符数，如果超过会进行换行
  semi: true, // 行位是否使用分号
  vueIndentScriptAndStyle: true, //设置在Vue单文件组件中的<script>和<style>标签的缩进方式。 如果设置为true，则会将这两个标签的内容缩进与组件的其余部分对齐，否则会将它们缩进两个空格。
  singleQuote: true, // 字符串是否使用单引号
  trailingComma: 'all', // 是否使用尾逗号
  proseWrap: 'never', //这个属性是用来设置Prettier在格式化Markdown文件时是否自动换行。如果设置为"always"，则表示总是会自动换行；如果设置为"never"，则表示不会自动换行；如果设置为"preserve"，则表示会保留原有的换行符。
  htmlWhitespaceSensitivity: 'strict', //设置HTML标签中空格敏感度的 如果设置为"strict"，则表示HTML标签中的空格会被认为是敏感的，如果设置为"ignore"，则表示HTML标签中的空格会被忽略。
  endOfLine: 'auto', //设置文件的换行符类型。可以设置为"auto"、"lf"、"crlf"、"cr"四种类型中的一种。
};
