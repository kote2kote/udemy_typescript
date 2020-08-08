module.exports = {
  root: true,
  env: {
    browser: true, // document や console にエラーが出ないようにする
    node: true,
    es6: true // es6から使える let や const にエラーがでないようにする
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'eslint:recommended', // おすすめの方法で。ここのパッケージはいろいろあるので適宜使用する
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here

  rules: {
    /**
     * 下のように.prettierrc.jsの内容を上書きしたい時は rules から可能
     * ※Prettier側とESLint側で設定ファイルの中身が矛盾しないように注意
     */

    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ],
    'no-undef': 'off',
    'no-console': 'off',
    'no-new': 'off', //newが使えない。ここはよくわからないので一旦回避
    quotes: ['error', 'single'], //single quoteにする
    'prettier/prettier': [
      'warn',
      {
        //    // 設定可能なオプションの一部. () はデフォルト値.
        printWidth: 100 // 行の最大長 (80)
        //     // tabWidth: 4,       // 1 インデントあたりの空白数 (2)
        //     // useTabs: true,     // インデントにタブを使用する (false)
        //     // semi: false,       // 式の最後にセミコロンを付加する (true)
        //     // singleQuote: true, // 引用符としてシングルクオートを使用する (false)
      }
    ],
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'comment-empty-line-before': 'off'
  }
}
