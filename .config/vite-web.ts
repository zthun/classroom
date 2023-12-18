import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export function defineWeb(dir: string) {
  return defineConfig({
    plugins: [tsConfigPaths()],
    server: {
      strictPort: true
    },
    resolve: {
      alias: {
        lodash: 'lodash-es'
      }
    }
  });
}
