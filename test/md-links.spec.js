const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should identify a markdown file', () => {
    expect(mdLinks.mdFile('name.md')).toBe('markdown file');
  });
  
  it('should read a markdown file', done => {
    const pathMock = 'README.md';
    function callback(pathMock) {
      try {
        expect(pathMock).toBe('read successfully');
        done();
      } catch (error){
        done(error);
      }
    }

    mdLinks.readFile(callback);
  });

  // it('should identify links in a markdown file', () => {
  //   ;
  // });

  // it('should filter links in an array of objects', () => {
  //   ;
  // });
});
