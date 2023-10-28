import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
  server: {
    port: 3000,
  },
})
