"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var imagesDir = path.join(__dirname, 'src', 'assets', 'img', 'photos');
var outputFile = path.join(__dirname, 'src', 'assets', 'photos.json');
fs.readdir(imagesDir, function (err, files) {
    if (err) {
        console.error('❌ Erro ao ler a pasta de imagens:', err);
        return;
    }
    var imageFiles = files.filter(function (file) {
        return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
    });
    var photos = imageFiles.map(function (file, index) { return ({
        id: index + 1,
        url: "assets/img/photos/".concat(file),
        filename: file
    }); });
    fs.writeFile(outputFile, JSON.stringify(photos, null, 2), function (err) {
        if (err) {
            console.error('❌ Erro ao salvar photos.json:', err);
        }
        else {
            console.log("\u2705 Arquivo photos.json gerado com ".concat(photos.length, " imagens!"));
        }
    });
});
//////Instruções - Toda vez que algo na pasta ou no arquivo for alterado, rodar:
//npx tsc generate-photos-json.ts
//node generate-photos-json.js
