module.exports = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-optional-chaining',
  });

  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-nullish-coalescing-operator',
  });
};
