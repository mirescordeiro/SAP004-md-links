const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { JSDOM } = require('jsdom');

module.exports = mdLinks;

function mdLinks(pathCLI){
  return new Promise((resolve, reject) => {
    if(path.extname(pathCLI) == '.md'){
      fs.readFile(pathCLI, 'utf-8', function showContent(error, content){
        if (error) return console.error('could not show content');
        resolve(content);
      });
    } else {
      reject('not a markdown file');
    }
  });
};

// ***********
// SEGUNDA FUNÇÃO - promisse
// ***********

// function mdLinks(pathCLI){
//   return new Promise((resolve, reject) => {
//     if(path.extname(pathCLI) == '.md'){
//       resolve(pathCLI);
//     } else {
//       reject('not a markdown file');
//     }
//   });
// };

// const readFile = () => {
//   fs.readFile(pathCLI, 'utf-8', function showContent(error, content){
//     if (error) return console.error('could not show content');
//     return content;
//   });
// };

// ***********
// PRIMEIRA FUNÇÃO - callbacks
// ***********

// function mdLinks(pathCLI){
//   if(path.extname(pathCLI) !== '.md'){
//     console.error('not a markdown file');
//   } else {
//     readFile(pathCLI);
//   }
// };

// function readFile(pathCLI){
//   fs.readFile(pathCLI, 'utf-8', showContent);
// };

// function showContent(error, content){
//   if (error) return console.error('could not show content');
//   console.log(content);
// };