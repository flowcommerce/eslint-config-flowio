'use strict';

module.exports = {
  'extends': [
    'eslint-config-airbnb-base',
    './rules/imports',
    './rules/style'
  ].map(require.resolve)
}
