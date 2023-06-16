module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'comma-dangle': 0,
    'spaced-comment': 0,
    'import/no-duplicates': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'import/extensions': 0,
    quotes: [
      'error',
      'single',
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/self-closing-comp': 0,
    'react/react-in-jsx-scope': 0,

    'import/prefer-default-export': 0,
    'default-param-last': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'warn',

    'eol-last': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-undef': 0,
    'no-shadow': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'react/jsx-closing-tag-location': 0,
    'react/no-unknown-property': 0,
    'react/jsx-pascal-case': 0,
    'react/void-dom-elements-no-children': 0,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'max-len': 0,
    'react/no-unescaped-entities': 0,
    'react/button-has-type': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/destructuring-assignment': 0,
  },
};
