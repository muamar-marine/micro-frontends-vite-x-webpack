import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import moduleFederationConfig from './module-federation.config';

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
  },
  base: 'http://localhost:2000',
  plugins: [moduleFederationConfig, react()],
  build: {
    target: 'chrome89',
  },
});
