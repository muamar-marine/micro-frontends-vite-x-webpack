import { federation } from '@module-federation/vite';

export default federation({
  name: 'shell',
  exposes: {},
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
