'use strict';

module.exports = {
  'rules': {
    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    'import/named': 'error',
    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',
    // ensure names exist at the time they are dereferenced, when imported as a full namespace
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': 'error',
  },
};