# md-access-links

## 1. Sobre a biblioteca

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório.

Arquivos `Markdown` normalmente contém inúmeros _links_ externos.
Visando o fácil acesso de suas URLs desenvolvemos a `md-access-links`, uma aplicação em 
[Node.js](https://nodejs.org/) que ao ler arquivos `Markdown` retorna: 

* **Rota** do arquivo onde foi encontrado o link;
* **URL** encontrada;
* **Texto** que aparece dentro de um link (`<a>`).

## 2. Instalação

#### Pelo GitHub

Com o comando `npm i -g https://github.com/mirescordeiro/SAP004-md-links` você pode instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install` aqui](https://docs.npmjs.com/cli/install)

## 3. Exemplos de Uso

Nossa aplicação pode ser executada da seguinte maneira, através do terminal:

`md-links <path-to-file>`

Por exemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html algum doc
./some/example.md http://google.com/ Google
```

Para realizar seus primeiros testes com nossa aplicação disponibilizamos o arquivo `accessibility.md`
com _links_ em português sobre desenvolvimento acessível.

## Autoria

Tamires Cordeiro – [@mirescordeiro](https://twitter.com/mirescordeiro)

A partir de projeto base da [@Laboratoria](https://github.com/Laboratoria)
