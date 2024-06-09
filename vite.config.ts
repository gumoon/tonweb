import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import baseSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), baseSsl()],
  build: {
    outDir: './docs',
  },
  base: './'
})
