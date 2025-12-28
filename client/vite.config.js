import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'spline-vendor': ['@splinetool/react-spline'],
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-intersection-observer'],
  },
})
