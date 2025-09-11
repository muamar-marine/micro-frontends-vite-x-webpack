const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');
const mfConfig = require('./module-federation.config');

module.exports = {
  devServer: {
    port: 2001,
  },
  output: {
    publicPath: 'http://localhost:2001/',
  },
  plugins: [new ModuleFederationPlugin(mfConfig)],
};
