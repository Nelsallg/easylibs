import { defineConfig } from 'vite';

export default defineConfig({
  // Point d'entrée de l'application
  // Ici, le fichier principal est main.ts
  // Vous pouvez ajuster cela en fonction de votre structure de projet
  root: './src',
  base: '/',
  plugins: [
    // styleImport([
    //   { libraryName:'material-icons', esModule: false },
    //   { libraryName: 'animate.css', esModule: false },
    //   { libraryName: 'font-awesome', esModule: false},
    //   {libraryName: "swiper", esModule:false}

    // ])
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        mixin: `@use './assets/mixin.scss';`,
        animation_slide: `@use './assets/animations/slide.scss';`,
        flash: `@import './assets/flash.scss';`,
      },
    },
  },

  resolve: {
    alias: {
      '@': '/packages/flash/src/script',
      '@js': '/packages/flash/dist/js',
      '@styles': '/packages/flash/dist/css', 
    },
  },

});
