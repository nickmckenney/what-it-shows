import { svelte } from '@sveltejs/vite-plugin-svelte';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
      compilerOptions: { css: 'injected' },
    }),
  ],
  resolve: {
    alias: { '#lib': resolve(root, 'src/lib') },
  },
});
