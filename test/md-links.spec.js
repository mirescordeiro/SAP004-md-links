const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should identify a markdow file and read it', done => {
    const pathMock = './README.md';
    function callback(pathMock) {
      try {
        expect(pathMock).toBe('README.md');
        done();
      } catch (error){
        done(error);
      }
    }

    mdLinks(callback);
  });

  // it('should identify links in a markdown file', () => {
  //   ;
  // });

  // it('should filter links in an array of objects', () => {
  //   ;
  // });
});
