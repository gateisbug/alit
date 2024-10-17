/* eslint-disable consistent-return */
// noinspection JSUnusedGlobalSymbols

import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'

import { version } from './package.json'

const p = (src: string) => resolve(__dirname, src)

export default defineConfig({
  base: '/alit/',
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssPresetEnv({
          stage: 1, //@COMMENT: stage: 0 은 모든 CSS 특징을 활성화합니다.
          minimumVendorImplementations: 2,
        }),
      ],
    },
  },
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
