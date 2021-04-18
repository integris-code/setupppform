module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    indent: 'off',
    'vue/no-use-v-if-with-v-for': 'off'
  }
}
