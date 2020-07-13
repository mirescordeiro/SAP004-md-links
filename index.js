const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { JSDOM } = require('jsdom');

module.exports = mdLinks;

function mdLinks(pathCLI){
  return new Promise((resolve, reject) => {
    if(path.extname(pathCLI) == '.md'){
      resolve(readMDFile(pathCLI));
    } else {
      reject(error);
    }
  });
};

const readMDFile = (pathCLI) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathCLI, 'utf-8', function renderToHTML(error, content){
      if (error) return reject(console.error('could not show content'));
      resolve(arrayOfLinkObjects(marked(content), pathCLI));
    });
  });
};

const searchLinksInHTML = (readMDFile) => {
  const { window } = new JSDOM(readMDFile);
  return window.document.getElementsByTagName('a');
};

const arrayOfLinkObjects = (readMDFile, pathCLI) => {
  const arrayOfLinks = Array.from(searchLinksInHTML(readMDFile));
  const mapObjectLinks = arrayOfLinks.map(link => {
    let route = pathCLI;
    let href = link.href;
    let text = link.textContent;
      if(/https?/.test(link.href)){
        return {
          route,
          href,
          text
        };
      }
    });
  return mapObjectLinks.filter(object => object !== undefined);
};