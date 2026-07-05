import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Expose env vars to the server-side handlers
  process.env = {...process.env, ...env};

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
                const handlerPath = path.resolve(__dirname, req.url.slice(1).split('?')[0] + '.ts');
                const {default: handler} = await server.ssrLoadModule(handlerPath);

                // Mock Vercel Function req/res objects
                const expressReq = {
                  method: req.method,
                  body: await new Promise((resolve) => {
                    let body = '';
                    req.on('data', (chunk) => body += chunk);
                    req.on('end', () => resolve(body ? JSON.parse(body) : {}));
                  }),
                  query: Object.fromEntries(new URL(req.url, `http://${req.headers.host}`).searchParams),
                };

                const expressRes = {
                  status: (code: number) => {
                    res.statusCode = code;
                    return expressRes;
                  },
                  json: (data: any) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  },
                };

                await handler(expressReq, expressRes);
              } catch (error) {
                console.error('Proxy Error:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({error: 'Proxy Error'}));
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
