import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import moduleFederationConfig from './module-federation.config';

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2002',
    port: 2002,
  },
  base: 'http://localhost:2002',
  plugins: [moduleFederationConfig, react()],
  build: {
    target: 'chrome89',
  },
});
