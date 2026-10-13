import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        house: resolve(__dirname, 'house/index.html'),
      },
    },
  },
})
