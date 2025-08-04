import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    // Generate gzip files
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 0, // Compress all files regardless of size
      deleteOriginFile: false, // Keep original files
      filter: /\.(js|mjs|json|css|html|svg)$/i, // Only compress these file types
    }),
    // Generate brotli files
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 0, // Compress all files regardless of size
      deleteOriginFile: false, // Keep original files
      filter: /\.(js|mjs|json|css|html|svg)$/i, // Only compress these file types
    }),
    // Add bundle analyzer
    analyzer({
      analyzerMode: 'static',
      fileName: 'bundle-report.html',
      openAnalyzer: false,
    })
  ],
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
