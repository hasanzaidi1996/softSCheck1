import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build'
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgr(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
          dev: {
            logLevel: ['error']
          }
        }
      })
    ],
    server: {
      // this ensures that the browser opens upon server start
      open: true, // this sets a default port to 3000
      port: 3000
    }
  };
});
