module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      project: true,
      tsconfigRootDir: __dirname,
  },
  rules: {
    //'prettier/prettier': 'error',
  },
  //ignorePatterns: [ '/*', '!/src/' ]
}
