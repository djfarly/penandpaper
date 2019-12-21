const path = require('path');

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../src'),
        'node-fetch$': 'node-fetch/lib/index.js', // https://github.com/bitinn/node-fetch/issues/493
      },
    },
  });
};
