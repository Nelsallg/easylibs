import { compile } from 'sass';
import pkg from 'fs-extra';
import path from 'path';

const { ensureDirSync, writeFileSync, copySync } = pkg;
const cssOutputPath = path.resolve(__dirname, 'dist/assets/css');

function compileSassFiles() {
  const sassFiles = ['src/assets/**/*.scss'];

  sassFiles.forEach(file => {
    const result = compile({ file });
    const outputFilePath = path.resolve(__dirname, file.replace('src/assets', cssOutputPath).replace('.scss', '.css'));

    ensureDirSync(path.dirname(outputFilePath));
    writeFileSync(outputFilePath, result.css);
  });
}

function copySassFiles() {
  const sassFiles = ['src/assets/**/*.scss'];

  sassFiles.forEach(file => {
    const outputFilePath = path.resolve(__dirname, file.replace('src/assets', cssOutputPath));

    ensureDirSync(path.dirname(outputFilePath));
    copySync(file, outputFilePath);
  });
}

compileSassFiles();
copySassFiles();
