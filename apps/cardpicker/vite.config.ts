import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const deps = require('./package.json').dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cardpicker',
      filename: 'remoteEntry.js',
      exposes: {
        './CardPicker': './src/CardPicker',
      },
      shared: {
        ...deps,
        ui: {
          singleton: true,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
});
