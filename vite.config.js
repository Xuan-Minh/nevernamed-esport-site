import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    svgr(), // important pour `?react`
    react(),
  ],
  server: {
    port: 4000,
    open: true,
  },
})