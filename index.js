const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { JSDOM } = require('jsdom');


module.exports = mdLinks;


function mdLinks(pathCLI){
  return new Promise((resolve, reject) => {
    if(path.extname(pathCLI) == '.md'){
      resolve(mdHTML(pathCLI));
    } else {
      reject('not a markdown file');
    }
  });
};

const mdHTML = function(pathCLI){
  fs.readFile(pathCLI, 'utf-8', function showContent(error, content){
    if (error) return console.error('could not show content');
    return arrayOfLinks(marked(content), pathCLI);
  });
};

const arrayOfLinks = function(mdHTML, pathCLI){
  const { window } = new JSDOM(mdHTML);
  const anchor = window.document.getElementsByTagName('a');
  const anchorArray = Array.from(anchor);
  const arrayLinks = anchorArray.map(link => {
    let path = pathCLI;
    let href = link.href;
    let text = link.textContent;
    
    if(/https?/.test(link.href)){
      return {
        path,
        href,
        text
      };
    }
  });
  const arrayFilterLinks = arrayLinks.filter(object => object !== undefined);
  return arrayFilterLinks;
};