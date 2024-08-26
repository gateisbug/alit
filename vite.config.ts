import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import { version } from './package.json';

const p = (src: string) => resolve(__dirname, src);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alit/',
  plugins: [react({
    devTarget: 'es2015',
  })],
  define: {
    __APP_VERSION__: JSON.stringify(version)
  },
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@app', replacement: p('./src/app') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@ui', replacement: p('./src/ui') },
      { find: '@util', replacement: p('./src/util') },
      { find: '@views', replacement: p('./src/views') },
    ],
  },
  cacheDir: '/.vite/',
  build: {
    outDir: 'build',
    target: 'es2015',
    cssTarget: 'chrome58',
    minify: true,
    cssMinify: true
  },
})
