import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This sets the base to root
  build: {
    outDir: 'dist'
  }
})