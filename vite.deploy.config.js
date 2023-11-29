import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://backend:8080', // Proxy requests to the backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
      },

    },
  },
  preview: {
    host: true,
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://backend:8080', // Proxy requests to the backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
      },
    },
  },
});
