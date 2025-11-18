import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/indie-hacker-vn/',
  plugins: [react()],
});
