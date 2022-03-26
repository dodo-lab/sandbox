import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'manifest.json',
          dest: 'dist',
        },
      ],
    }),
  ],
});
