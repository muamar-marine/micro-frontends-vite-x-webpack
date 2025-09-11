import { federation } from '@module-federation/vite';

export default federation({
  name: 'vite-gateway',
  exposes: {},
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
