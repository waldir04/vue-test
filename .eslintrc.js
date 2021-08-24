module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-extra-semi': '1',
    'vue/semi': '1'
  }
}
