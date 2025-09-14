import { federation } from '@module-federation/vite';

export default federation({
  name: 'new_barge',
  filename: 'remoteEntry.js',
  exposes: {
    './NewBargeContent': './src/App.tsx',
    './ProfilePage': './src/pages/profiles',
  },
  library: { type: 'var', name: 'shared' },
  remotes: {
    shell: {
      type: 'module',
      name: 'shell',
      entry: 'http://localhost:2000/remoteEntry.js',
    },
    old_barge: {
      type: 'module',
      name: 'old_barge',
      entry: 'http://localhost:2001/remoteEntry.js',
    },
    new_barge: {
      type: 'module',
      name: 'new_barge',
      entry: 'http://localhost:2002/remoteEntry.js',
    },
    shared: 'shared@http://localhost:3000/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true },
  },
});
