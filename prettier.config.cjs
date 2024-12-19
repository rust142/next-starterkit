/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
module.exports = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  useTabs: false,
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 100,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '^react$',
    '',
    '^(@utils|@images|@icons|@layouts)(.*)$',
    '',
    '^@/components/(.*)$',
    '',
    '^@components/(.*)$',
    '',
    '^./components/(.*)$',
    '',
    '^@(.*)$',
    '',
    '^#(.*)$',
    '',
    '^./(.*)$',
    '',
    '^../(.*)$',
    '',
    '^(.*)$',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
}
