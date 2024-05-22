import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server:{
        proxy: {
        '/server': {
            target: 'http://localhost:8888',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/server/, '')
        }
        }
    }
})
