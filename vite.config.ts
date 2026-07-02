import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Expose env vars to the server-side process for the local proxy
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-proxy',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.startsWith('/api/chat')) {
              try {
                const {default: handler} = await import('./api/chat');
                // Basic mock for Vercel Request/Response
                const chunks: any[] = [];
                req.on('data', (chunk) => chunks.push(chunk));
                req.on('end', async () => {
                  const body = chunks.length > 0 ? JSON.parse(Buffer.concat(chunks).toString()) : {};
                  const vercelReq = Object.assign(req, {body}) as any;
                  const vercelRes = {
                    status: (code: number) => ({
                      json: (data: any) => {
                        res.statusCode = code;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                      },
                    }),
                  } as any;
                  await handler(vercelReq, vercelRes);
                });
              } catch (error) {
                console.error('Proxy Error:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({error: 'Internal Server Error'}));
              }
              return;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
