module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      /*
      ecmaVersion: 2020,
      sourceType: 'module',
      */
      project: true,
      //tsconfigRootDir: ,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: [ '/*', '!/src/' ]
}
