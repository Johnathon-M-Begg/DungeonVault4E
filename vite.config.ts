/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setup-tests.ts',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/main.tsx',
        './*.js',
        '**/*Props.ts',
      ],
      thresholds: {
        branches: 80,
      },
    },
  },
});
