const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(pathCLI){
  if(path.extname(pathCLI) !== '.md'){
    console.error('not a markdown file');
  } else {
    readFile(pathCLI);
  }
};

function readFile(pathCLI){
  fs.readFile(pathCLI, 'utf-8', showContent);
};

function showContent(error, content){
  if (error) return console.error('could not show content');
  console.log(content);
};

// arquivo md .promisse
// ler arquivo  .then
// buscar links .then
// retornar os links .then
// retornar erro .catch


//************************
// consumir valor no then seguinte
//************************

//... muito código antes...
// return Promise.resolve(dado);
// }.then(
//   (dado) => {
//     // Aqui podemos usar o dado que retornamos no 'then' anterior
//   }
// );

// promise.then(function(result) {
//   console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });<-- preferir usar catch ao invês do segundo parâmetro do then para erros

//************************
// Promisses for dummies
//************************

// //_ ES6: Full example_

// const isMomHappy = true;

// // Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => { // fat arrow
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// // 2nd promise
// const showOff = function (phone) {
//     const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };

// // call our promise
// const askMom = function () {
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled)) // fat arrow
//         .catch(error => console.log(error.message)); // fat arrow
// };

// askMom();

//************************
// developers google
//************************

// getJSON('story.json').then(function(story) {
//   addHtmlToPage(story.heading);

//   // Map our array of chapter urls to
//   // an array of chapter json promises.
//   // This makes sure they all download in parallel.
//   return story.chapterUrls.map(getJSON)
//     .reduce(function(sequence, chapterPromise) {
//       // Use reduce to chain the promises together,
//       // adding content to the page for each chapter
//       return sequence.then(function() {
//         // Wait for everything in the sequence so far,
//         // then wait for this chapter to arrive.
//         return chapterPromise;
//       }).then(function(chapter) {
//         addHtmlToPage(chapter.html);
//       });
//     }, Promise.resolve());
// }).then(function() {
//   addTextToPage("All done");
// }).catch(function(err) {
//   // catch any error that happened along the way
//   addTextToPage("Argh, broken: " + err.message);
// }).then(function() {
//   document.querySelector('.spinner').style.display = 'none';
// })