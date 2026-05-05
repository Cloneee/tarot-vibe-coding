import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const normalizeBasePath = (value: string): string => {
  const trimmedValue = value.trim()

  if (!trimmedValue || trimmedValue === '/') {
    return '/'
  }

  return `/${trimmedValue.replace(/^\/+|\/+$/g, '')}/`
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base =
    env.VITE_BASE_PATH ||
    (mode === 'github-pages' ? '/tarot-vibe-coding/' : '/')

  return {
    base: normalizeBasePath(base),
    plugins: [react(), tailwindcss()],
  }
})
