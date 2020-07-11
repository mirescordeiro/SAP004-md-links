const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should identify a markdown file', () => {
    let pathMock = 'name.md';
    expect(mdLinks(pathMock)).toBe(readMDFile(pathMock));
  });
  
  it('should read a markdown file', () => {
    ;
  });

  // it('should identify links in a markdown file', () => {
  //   ;
  // });

  // it('should filter links in an array of objects', () => {
  //   ;
  // });
});
