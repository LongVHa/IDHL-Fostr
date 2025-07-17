import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import path from 'path';

export default defineConfig({
  plugins: [babel()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'variables' as *;`,
      }
    }
  },
  build: {
    outDir: 'assets',
    emptyOutDir: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});
