const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { JSDOM } = require('jsdom');


module.exports = mdLinks;


function mdLinks(pathCLI){
  return new Promise((resolve, reject) => {
    if(path.extname(pathCLI) == '.md'){
      resolve(arrayOfLinks);
    } else {
      reject('not a markdown file');
    }
  });
};

const mdHTML = function(pathCLI){
  fs.readFile(pathCLI, 'utf-8', function showContent(error, content){
    if (error) return console.error('could not show content');
    return marked(content);
  });
};

const arrayOfLinks = function(mdHTML, pathCLI){
  const { window } = new JSDOM(mdHTML);
  window.document.querySelectorAll('a').forEach(link => {
    if(typeof link.href.includes('http://'||'https://')){
      let path = __filename;
      let href = link.href;
      let text = link.textContent;
    
      let link = {
        path,
        href,
        text
      };
    }
    return linksArray = [...link];
  });
};