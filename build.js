// build.js
import { compile } from 'sass';
import pkg from 'fs-extra';
const { ensureDirSync, writeFileSync, copySync } = pkg;

// Chemin du dossier de sortie pour les fichiers CSS
const cssOutputPath = 'packages/flash/dist/css';

// Compiler les fichiers SCSS en CSS
function compileSassFiles() {
  const flashSassFiles = ['assets/**/*.scss']; // Chemin vers vos fichiers SCSS source

  flashSassFiles.forEach(file => {
    const result = compile({ file });
   
    const outputFilePath = file.replace('styles', cssOutputPath).replace('.scss', '.css');

    ensureDirSync(outputFilePath.split('/').slice(0, -1).join('/'));
    writeFileSync(outputFilePath, result.css);
  });
}

// Copier les fichiers SCSS dans le dossier de sortie
function copySassFiles() {
  const sassFiles = ['assets/**/*.scss']; // Chemin vers vos fichiers SCSS source

  sassFiles.forEach(file => {
    const outputFilePath = file.replace('styles', cssOutputPath);
    copySync(file, outputFilePath);
  });
}

// Exécuter la compilation des fichiers SCSS en CSS
compileSassFiles();

// Copier les fichiers SCSS dans le dossier de sortie
copySassFiles();
