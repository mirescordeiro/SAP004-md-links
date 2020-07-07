const fs = require('fs');

// definir esse data na tratativa
let searchMD = fs.readFile(path, 'utf-8', (error) => {
  if(error){
    console.log(error);
  } else {
    console.log('read successfully');
  }
});

module.exports = () => {
  // ...
};