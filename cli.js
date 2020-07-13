#!/usr/bin/env node

const mdLinks = require("./index.js");

const path = process.argv[2];
const option = process.argv[3];

mdLinks(path)
  .then((content) => console.log(content))
  .catch((error) => console.error);

// arquivo md .promisse
// ler arquivo  .then
// buscar links .then
// retornar os links .then
// retornar erro .catch
