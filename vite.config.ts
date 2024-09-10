import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginString  from 'vite-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginString({
    include: ['**/*.html'],  // Include HTML files
  }),
],
})
