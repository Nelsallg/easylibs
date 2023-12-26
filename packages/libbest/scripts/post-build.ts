const fs = require('fs');
const path = require('path');

const packageFolders = ['file-uploader'];

const indexPath = path.resolve(__dirname, '../index.ts');
const imports = packageFolders
  .map((folder) => `export { default as ${folder.charAt(0).toUpperCase() + folder.slice(1)} } from './${folder}';`)
  .join('\n');

const content = `// libbest/index.ts\n${imports}\n// Exportez d'autres bibliothèques de la même manière\n`;

fs.writeFileSync(indexPath, content);

console.log('Index file updated successfully.');
