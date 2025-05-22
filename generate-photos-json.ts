import * as fs from 'fs';
import * as path from 'path';

const imagesDir = path.join(__dirname, 'src', 'assets', 'img', 'photos');
const outputFile = path.join(__dirname, 'src', 'assets', 'photos.json');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('❌ Erro ao ler a pasta de imagens:', err);
    return;
  }

  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  const photos = imageFiles.map((file, index) => ({
    id: index + 1,
    url: `assets/img/photos/${file}`,
    filename: file,
  }));

  fs.writeFile(outputFile, JSON.stringify(photos, null, 2), (err) => {
    if (err) {
      console.error('❌ Erro ao salvar photos.json:', err);
    } else {
      console.log(`✅ Arquivo photos.json gerado com ${photos.length} imagens!`);
    }
  });
});


//////Instruções - Toda vez que algo na pasta ou no arquivo for alterado, rodar:

//npx tsc generate-photos-json.ts
//node generate-photos-json.js
