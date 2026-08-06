import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work/index.html'),
        stories: resolve(__dirname, 'stories/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        team: resolve(__dirname, 'team/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
