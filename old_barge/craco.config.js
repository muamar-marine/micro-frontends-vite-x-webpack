const cracoModuleFederation = require('craco-module-federation');

module.exports = () => {
  return {
    devServer: {
      open: false,
      port: 2001,
    },

    plugins: [
      {
        plugin: cracoModuleFederation,
        options: { useNamedChunkIds: true }, //THIS LINE IS OPTIONAL
      },
    ],
  };
};
