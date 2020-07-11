const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(pathCLI){
  if(path.extname(pathCLI) !== '.md'){
    console.error('not a markdown file');
  } 
  readFile(pathCLI);
};

function readFile(pathCLI){
  fs.readFile(pathCLI, 'utf-8', showContent);
};

function showContent(error, content){
  if (error) return console.error('could not show content');
  console.log(content);
};