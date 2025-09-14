module.exports = {
  name: 'old_barge',
  filename: 'remoteEntry.js',
  exposes: {},
  // library: { type: 'var', name: 'shared' },
  remotes: {
    shell: 'shell@http://localhost:2000/remoteEntry.js',
    old_barge: 'old_barge@http://localhost:2001/remoteEntry.js',
    new_barge: 'new_barge@http://localhost:2002/remoteEntry.js',
    shared: 'shared@http://localhost:3000/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
};
