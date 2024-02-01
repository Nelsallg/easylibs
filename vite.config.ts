import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import fs from 'fs';
import terser from '@rollup/plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';
const certPath = '/chemin/vers/cert.pem';
const keyPath = '/chemin/vers/key.pem';

export default defineConfig({
  root: './src',
  base: '/',
  plugins: [],
  server: {
    port: 4000,
    open: "./index.html",
    https: {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/flash.ts'),
      name: 'flash',
      fileName: (format) => `flash.${format}${isProduction ? '.min' : ''}.js`,
      formats: ['umd'], // Vous pouvez ajouter d'autres formats comme 'es' si nécessaire
    },
    sourcemap: true,
    outDir: './public',
    emptyOutDir: true,
    rollupOptions: {
      // Assurez-vous que votre bibliothèque fonctionne correctement dans différents environnements
      external: [],
      output: {
        globals: {
          // Définissez les dépendances externes ici
        },
      },
      plugins: isProduction
        ? [terser()] // Utilisez Terser pour la minification en production
        : [],
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        mixin: `@use './src/scss/style.scss';`,
      },
    },
  },

  resolve: {
    alias: {
      '@js': '/src/ts',
      '@styles': '/src/scss', 
    },
  },

});
