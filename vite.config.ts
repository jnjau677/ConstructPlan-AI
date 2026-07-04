import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Attach loaded environment variables to process.env so they are available to the local proxy.
  process.env = { ...process.env, ...env };

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-proxy',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.startsWith('/api/')) {
              try {
                const handlerName = req.url.split('?')[0].replace('/api/', '');
                const handlerModule = await server.ssrLoadModule(`./api/${handlerName}.ts`);
                const handler = handlerModule.default;

                if (handler) {
                  // Basic mock for Vercel's req/res
                  const chunks: any[] = [];
                  req.on('data', chunk => chunks.push(chunk));
                  req.on('end', async () => {
                    let body = {};
                    try {
                      body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {};
                    } catch (e) {
                      console.error('Failed to parse request body:', e);
                    }
                    const mockReq = { ...req, body };
                    const mockRes = {
                      status(code: number) {
                        res.statusCode = code;
                        return this;
                      },
                      json(data: any) {
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                        return this;
                      },
                    };
                    await handler(mockReq, mockRes);
                  });
                  return;
                }
              } catch (err) {
                console.error('Local API proxy error:', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
              }
            }
            next();
          });
        },
      }
    ],
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
