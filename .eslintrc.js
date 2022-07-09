module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    "eslint:recommended",
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'warn',
  },
};
