#!/usr/bin/env node

const mdLinks = require("./index.js");

const path = process.argv[2];

mdLinks(path)
  .then(links => links.forEach(object => {
    console.log(object.route, object.href, object.text)
  }))
  .catch(error => console.error('not a markdown file'));
