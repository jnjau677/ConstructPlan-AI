import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    // Removed direct API key injection to prevent exposure in production assets.
    // Use the /api/chat proxy instead.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          configure: (proxy, options) => {
            proxy.on('error', (err, req, res) => {
              // Handle proxy errors silently or log them
            });
            proxy.on('proxyReq', (proxyReq, req, res) => {
              // Can add headers here if needed
            });
          },
          // For local development, we use a simple middleware to serve the Vercel function
          bypass: async (req, res, proxyOptions) => {
            if (req.url?.startsWith('/api/chat')) {
              try {
                // In local dev, we dynamically load the handler
                const { default: handler } = await import('./api/chat');
                // Create mock VercelRequest and VercelResponse
                const vercelReq = req as any;
                const vercelRes = res as any;

                // Add simple json() method to res if it doesn't exist
                if (!vercelRes.json) {
                  vercelRes.json = (data: any) => {
                    vercelRes.setHeader('Content-Type', 'application/json');
                    vercelRes.end(JSON.stringify(data));
                  };
                }

                // Add status() method if it doesn't exist
                if (!vercelRes.status) {
                  vercelRes.status = (code: number) => {
                    vercelRes.statusCode = code;
                    return vercelRes;
                  };
                }

                await handler(vercelReq, vercelRes);
                return null; // Handled
              } catch (e) {
                console.error('Failed to load local API handler:', e);
                return '/index.html'; // Fallback
              }
            }
            return null;
          }
        }
      }
    },
  };
});
