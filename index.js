const fs = require('fs');
const path = require('path');

function readFile(pathCLI, callback){
  fs.readFile(pathCLI, 'utf-8', (error, content) => {
    if(error){
      throw console.error('could not read the document');
    } 
    content;
    callback();
  });
};

module.exports = function mdLinks(pathCLI){
  if(path.extname(pathCLI) !== '.md'){
    console.error('not a markdown file');
  } 
  readFile(pathCLI, (markdownText) => console.log(markdownText));
};