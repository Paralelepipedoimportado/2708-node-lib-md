import fs from 'fs';
import chalk from 'chalk';

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
      const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}


extraiLinks(textoTeste);

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red.bgBlue(erro.code, 'não há arquivos no diretório'));
}

async function pegaArchivo(caminhoDoArquivo) {
  try {
  const encoding = 'utf-8';
  const texto = await fs.promises.readFile
  (caminhoDoArquivo, encoding)
  console.log(extraiLinks(texto));
  console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro)
  }
}

//function pegaArchivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
//    fs.promises.readFile(caminhoDoArquivo, encoding)
 //   .then((texto) => console.log(chalk.green(texto)))
 //   .catch(trataErro)
//}
//console.log(chalk.blue.bgRed('olá mundo'));

//console.log('ola mundo');
//console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
//console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');

//function trataErro(erro) {
  //  console.log(erro)
    //throw new Error(chalk.red.bdRed(erro.code, 'não há arquivo no diretorio'))
//}

//function pegaArchivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
 //   fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
   //     if (erro) {
     //       trataErro(erro);
       // }
  //      console.log(chalk.green.bgGreenBright(texto));
//    })
//}

pegaArchivo('./arquivos/texto.md');


