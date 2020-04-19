module.exports = {
    parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "indent": [2, 4],
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/prefer-stateless-function": [1, { "ignorePureComponents": true }],
    "import/no-extraneous-dependencies": [1, {"peerDependencies": true}],
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "max-len": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
  },
};
