# eslint-config-flowio

> A package that provides Flow Commerce's `.eslintrc` as an extensible shared config.

## Install

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React, which are based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with some rules modified. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.


```bash
npm install --save-dev @flowio/eslint-config-flowio eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```

## Usage

Extend the config in a `.eslintrc` file:

```json
{
  "extends": "@flowio/flowio"
}
```

## License

MIT