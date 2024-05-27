import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const p = (src: string) => resolve(__dirname, src);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alit/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@app', replacement: p('./src/app') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@styles', replacement: p('./src/assets/styles') },
      { find: '@icon', replacement: p('./src/assets/icon') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@ui', replacement: p('./src/ui') },
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
