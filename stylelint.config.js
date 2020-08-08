module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration

  extends: [
    'stylelint-config-standard',
    // 'stylelint-config-rational-order',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-scss'],

  // .prettierrc.jsの内容を上書きしたい時は rules から可能
  rules: {
    'unicode-bom': 'never',
    'prettier/prettier': [true, { 'unicode-bom': null }],
    indentation: 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'function-name-case': null, //scss functionの関数名大文字小文字無視
    'declaration-empty-line-before': null,
    'no-descending-specificity': null //セレクタの優先度
    // 'selector-pseudo-element-colon-notation': null, // :: の扱い
  }
}
