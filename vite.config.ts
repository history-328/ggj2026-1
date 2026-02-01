import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    host: true,
    allowedHosts: ['ggj2026.zeabur.app']
  }
});