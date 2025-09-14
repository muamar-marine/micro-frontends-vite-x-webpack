import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import pkg from './package.json';

export default createModuleFederationConfig({
  name: pkg.name,
  filename: 'remoteEntry.js',
  exposes: {
    '.': './src/index.tsx',
    './header': './src/components/header/index.tsx',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
});
