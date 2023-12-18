import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export function defineWeb(dir: string) {
  return defineConfig({
    plugins: [tsConfigPaths()],
    server: {
      host: '0.0.0.0',
      strictPort: true
    },
    resolve: {
      alias: {
        lodash: 'lodash-es'
      }
    }
  });
}
