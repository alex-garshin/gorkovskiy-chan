import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import handlebars from 'vite-plugin-handlebars'

const root = import.meta.dirname

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(root, 'src/partials'),
      context(pagePath) {
        const path = String(pagePath).replaceAll('\\', '/')
        return {
          home: /\/house(\/|$)/.test(path) ? '/' : '',
        }
      },
    }),
  ],
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
        main: resolve(root, 'index.html'),
        house: resolve(root, 'house/index.html'),
      },
    },
  },
})

