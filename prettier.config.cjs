/* eslint-disable @typescript-eslint/no-require-imports */

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
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrderParserPlugins: ['typescript', 'decorators'],
  importOrder: ['^@(.*)$', '^#(.*)$', '^./(.*)$', '^../(.*)$', '^(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
