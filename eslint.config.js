import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginReact from "eslint-plugin-react";
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Важно для React
        },
      },
    },
    plugins: {
      pluginReact,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["warn", {
        "vars": "all",
        "args": "after-used",
        "caughtErrors": "all",
        "ignoreRestSiblings": false,
        "ignoreUsingDeclarations": false,
        "reportUsedIgnorePattern": false
      }],


      "indent": ["error", 4],
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-parens": ["error", "always"],
      "react/react-in-jsx-scope": "off",
    }
  },
])
