import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const compat = new FlatCompat({
  baseDirectory: dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  ...compat.config({
    extends: [
      'plugin:unicorn/recommended',
      'plugin:promise/recommended',
      'plugin:tailwindcss/recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['unicorn', 'promise'],
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect',
      },
      tailwindcss: {
        callees: ['classnames', 'cva', 'clsx', 'ctl'],
        config: 'tailwind.config.cjs',
        cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
        cssFilesRefreshRate: '5_000',
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [],
        classRegex: '^class(Name)?$',
      },
    },
    rules: {
      'no-var': ['error'],
      'prefer-const': ['error'],
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      'no-console': ['warn'],
      'eqeqeq': ['error', 'always'],
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'never'],
      'consistent-return': ['error'],
      'object-shorthand': ['warn', 'always'],
      'array-callback-return': ['error', { allowImplicit: true }],
      'dot-notation': ['error', { allowKeywords: true }],
      'space-before-function-paren': 'off',
      'comma-dangle': ['off', 'always-multiline'],
      'eol-last': ['error', 'always'],
      'no-floating-decimal': ['error'],
      'no-array-constructor': ['error'],
      'no-new-wrappers': ['error'],
      'no-self-assign': ['error'],
      'no-return-await': ['error'],
      'no-implicit-globals': ['error'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-constant-condition': ['error'],
      'no-control-regex': ['error'],
      'no-debugger': ['error'],
      'no-duplicate-case': ['error'],
      'no-eval': ['error'],
      'no-ex-assign': ['error'],
      'no-fallthrough': ['error'],
      'no-inner-declarations': ['error'],
      'no-shadow': ['off'],
      '@typescript-eslint/no-shadow': 'error',
      'no-regex-spaces': ['error'],
      'no-self-compare': ['error'],
      'no-sparse-arrays': ['error'],
      'no-mixed-spaces-and-tabs': ['error'],
      'no-this-before-super': ['error'],
      'no-with': ['error'],
      'no-trailing-spaces': ['error', { ignoreComments: true }],
      'no-undef-init': ['error'],
      'no-unsafe-finally': ['error'],
      'no-unreachable': ['error'],
      'no-multi-spaces': ['error'],
      'rest-spread-spacing': ['error', 'never'],
      'padded-blocks': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'use-isnan': ['error'],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'curly': ['error', 'all'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
      ],
      'handle-callback-err': ['error', '^(err|error)$'],
      'max-len': [
        'error',
        {
          code: 100,
          comments: 120,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreStrings: true,
        },
      ],
      'promise/always-return': 'off',
      'unicorn/prefer-module': ['error'],
      'unicorn/prefer-node-protocol': ['error'],
      'unicorn/filename-case': [
        'error',
        {
          case: 'snakeCase',
        },
      ],
      'unicorn/no-await-expression-member': ['error'],
      'unicorn/no-for-loop': ['error'],
      'unicorn/no-instanceof-array': ['error'],
      'unicorn/prefer-number-properties': ['error'],
      'unicorn/catch-error-name': [
        'error',
        {
          name: 'error',
        },
      ],
      'unicorn/prefer-export-from': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-nested-ternary': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react/prop-types': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
]

export default eslintConfig
