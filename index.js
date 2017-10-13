'use strict';

module.exports = {
  'extends': [
    'eslint-config-airbnb',
    './rules/react',
    './rules/style',
    './rules/eslint',
  ].map(require.resolve)
}
