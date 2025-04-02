import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Accetta connessioni esterne
    port: 5173,      // Assicurati che sia la porta corretta
    strictPort: true // Evita che Vite cambi porta automaticamente
  }
})

