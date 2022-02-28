module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    wx: true,
  },
  extends: [
    "taro/vue3",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/typescript",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "global-require": "off",
    "@typescript-eslint/no-var-requires": "off",
    "func-names": "off",
    "no-plusplus": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "no-prototype-builtins": "off",
    "no-param-reassign": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-promise-reject-errors": "off",
    "consistent-return": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    react: {
      version: "17.02",
    },
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
