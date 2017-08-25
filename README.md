[![NPM Version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

# eslint-config-flowio

A package that provides our `.eslintrc` as an extensible shared config.

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@flowio/eslint-config-flowio@latest" peerDependencies
```

Linux / OSX users can simply run:

```
npm info "@flowio/eslint-config-flowio@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "@flowio/eslint-config-flowio@latest"
```

Windows users can either install all the peer dependencies manually, or use the `install-peerdeps` cli tool.

```
npm install -g install-peerdeps
install-peerdeps --dev @flowio/eslint-config-flowio
```

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React, which are based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with some rules modified.

Extend the config in a `.eslintrc` file:

```json
{
  "extends": "@flowio/flowio"
}
```

We also export a base configuration which excludes React rules. You can extend
your `.eslintrc` in the following way to include it:

```json
{
  "extends": "@flowio/flowio/base"
}
```

### Acknowledgement

A special thanks to:

* [Airbnb](https://github.com/airbnb) for sharing their extensive JavaScript style guide and ESLint rules.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@flowio/eslint-config-flowio.svg
[npm-url]: https://www.npmjs.com/package/@flowio/eslint-config-flowio
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-flowio.svg
[downloads-url]: https://www.npmjs.com/package/@flowio/eslint-config-flowio
[greenkeeper-image]: https://badges.greenkeeper.io/flowcommerce/eslint-config-flowio.svg
[greenkeeper-url]: https://greenkeeper.io/
