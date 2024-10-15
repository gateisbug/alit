import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { version } from './package.json'

const p = (src: string) => resolve(__dirname, src)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alit/',
  plugins: [
    react({
      devTarget: 'es2015',
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(version),
    'process.env.NODE_ENV': '"production"',
    'process.env.REACT_APP_PROFILING': 'true',
  },
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@app', replacement: p('./src/app') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@util', replacement: p('./src/util') },
      { find: '@views', replacement: p('./src/views') },
      { find: '@xui', replacement: p('./x-ui') },
      { find: '@xutil', replacement: p('./x-util') },
    ],
  },
  build: {
    outDir: 'build',
    target: 'es2015',
    cssTarget: 'chrome58',
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf('node_modules') !== -1) {
            const module = id.split('node_modules/').pop()?.split('/')[0]
            return `vendor-${module}`
          }
        },
      },
    },
  },
})
