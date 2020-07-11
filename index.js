const fs = require('fs');
const path = require('path');




function mdLinks(pathCLI){
  if(path.extname(pathCLI) == '.md'){
    return {
      readMDFile: ()=>{
        fs.readFile(path, 'utf-8', (error) => {
          if(error){
            console.log(error);
          } else {
            console.log('read successfully');
          }
        });
      }
    }
  } else {
    throw console.error('não é um arquivo md');
  }
};

module.exports = mdLinks;

// function readMDFile(){
//   fs.readFile(path, 'utf-8', (error) => {
//     if(error){
//       console.log(error);
//     } else {
//       console.log('read successfully');
//     }
//   });
// }

// module.exports = (pathCLI) => {
//           //readMDFile(path);

  const readMDFile = () => {
    fs.readFile(path, 'utf-8', (error) => {
      if(error){
        console.log(error);
      } else {
        console.log('read successfully');
      }
    });
  }
// };


// If you want the root of your module's export to be a function (such as a constructor) or 
// if you want to export a complete object in one assignment instead of building it one property 
// at a time, assign it to module.exports instead of exports.

// Below, bar.js makes use of the square module, which exports a constructor:

// var square = require('./square.js');
// var mySquare = square(2);
// console.log('The area of my square is ' + mySquare.area());
// The square module is defined in square.js:

// // assigning to exports will not modify module, must use module.exports
// module.exports = function(width) {
//   return {
//     area: function() {
//       return width * width;
//     }
//   };
// }


// Javascript com recursividade
    
// Funções como parâmetros
    
// Primeiro criamos uma função para fazer o que desejamos
// Nesse caso, criamos uma função para concatenar duas palavras: nome e sobrenome
    
// Após isso, chamamos o método concatenar() passando três argumentos
// Primeiro: o nome
// Segundo: o sobrenome
// Terceiro: o método callback que será executado dentro da função concatenar()
// Nesse caso, o método de callback irá imprimir o nome e sobrenome já concatenados.

// function concatenar(nome, sobrenome, callback) {
//   var nomeCompleto = nome + ' ' + sobrenome;
  
//   // executa o método de callback que irá imprimir o nome completo
//   callback(nomeCompleto); // => Fernando Porazzi
// }

// window.onload = function() {
//   // chama a função concatenar() e passa os parâmetros, entre eles, o método de callback
//   concatenar('Fernando', 'Porazzi', function(resultado){
//       console.log(resultado)
//   });
// };


// function contagemRegressiva(numero) {
//   if (numero < 1) return;
//   else contagemRegressiva(numero - 1);
//   console.log("O número actual é:", numero);
// }

// function main() {
//   contagemRegressiva(3);
//   console.log("main()");
// }

// main();