const cracoModuleFederation = require('craco-module-federation');
const CracoAntDesignPlugin = require('craco-antd');

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
      {
        plugin: CracoAntDesignPlugin,
        options: {
          customizeTheme: {
            '@primary-color': '#00B96B',
            '@link-color': '#00B96B',
            '@border-radius-base': '8px',
          },
        },
      },
    ],
  };
};
