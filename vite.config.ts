import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'vercel-api-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith('/api/chat')) {
              try {
                // Local execution of Vercel Functions via Vite middleware requires manually populating 'process.env'
                Object.assign(process.env, env);
                const module = await server.ssrLoadModule('./api/chat.ts');
                const handler = module.default || module;
                await handler(req, res);
              } catch (err) {
                console.error('API Error in Vite Middleware:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
              }
            } else {
              next();
            }
          });
        }
      }
    ],
    define: {
      // Do not define GEMINI_API_KEY on client-side to prevent API key leakage.
    },
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
    },
  };
});
