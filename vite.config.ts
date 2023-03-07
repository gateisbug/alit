import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alit/',
  plugins: [react()],
  resolve: {
    alias: [{
      find: '@src', replacement: '/src'
    }]
  },
  server: {
    cors: false
  },
})