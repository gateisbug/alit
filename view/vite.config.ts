import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const p = (src: string) => resolve(__dirname, src);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@icon', replacement: p('./src/assets/icon') },
      { find: '@styles', replacement: p('./src/assets/stylesheet') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@domain', replacement: p('./src/domain') },
      { find: '@pages', replacement: p('./src/pages') },
      { find: '@types', replacement: p('./src/types') },
      { find: '@util', replacement: p('./src/util') },
      { find: '@views', replacement: p('./src/views') },
    ],
  },
  cacheDir: '/.vite/',
  build: {
    outDir: 'build',
    minify: true,
    cssMinify: true,
  },
})
