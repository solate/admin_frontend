import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/admin/api': {
        target: 'http://0.0.0.0:8888',
        changeOrigin: true,
        secure: false,
        ws: false,
        rewrite: (path) => path
      }
    }
  }
})
