'use strict';

module.exports = {
  'extends': [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/style',
  ].map(require.resolve)
}
