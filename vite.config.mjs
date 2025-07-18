// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
   server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      overlay: true
    }
  },
  plugins: [
    postcss({
      extract: 'IDHL-fostr-bundle.css',
      minimize: true,
      sourceMap: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/scripts/main.js'),
      name: 'FostrThemeBundle',
      formats: ['es'],
      fileName: () => 'IDHL-fostr-bundle.js'
    },
    cssCodeSplit: false,
    outDir: 'assets',
    emptyOutDir: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/variables' as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
});