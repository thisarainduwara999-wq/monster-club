import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/monster-club/', // <--- මේකෙන් තමයි GitHub Pages වලට path එක හදලා දෙන්නේ
})
