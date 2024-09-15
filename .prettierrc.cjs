module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  arrowParens: 'always',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
