import fs from 'fs';
import chalk from 'chalk';

//console.log(chalk.blue.bgRed('olá mundo'));

//console.log('ola mundo');
//console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
//console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');

function trataErro(erro) {
    throw new Error(chalk.red.bdRed
}

function pegaArchivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green.bgGreenBright(texto));
    })
}

pegaArchivo('./arquivos/texto.md');