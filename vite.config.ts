import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Dockerのポートマッピングが正しく動作するようにする
    host: "0.0.0.0"
  }
})
