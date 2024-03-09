import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ReactReduxContext } from 'react-redux'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{rollupOptions:ReactReduxContext}
})
