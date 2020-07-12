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

//test -- --coverage <--saber a cobertura

//******************
// matchers, usar .not antes pra negar e testar falso positivo
//******************

// expect(n).toBe(value)
// expect(n).toEqual(value)

// *** undefined, null e false
// expect(n).toBeNull();
// expect(n).toBeDefined();
// expect(n).not.toBeUndefined();
// expect(n).not.toBeTruthy();
// expect(n).toBeFalsy();

// *** números, flutuantes usar .toBeCloseTo
// expect(value).toBeGreaterThan();
// expect(value).toBeGreaterThanOrEqual();
// expect(value).toBeLessThan();
// expect(value).toBeLessThanOrEqual();

// *** string
// expect('team').not.toMatch(/I/) <-- RegExp

// *** arrays
// expect(shoppingList).toContain('beer'); <-- item específico

// *** exceções
// expect(compileAndroidCode).toThrow();
// expect(compileAndroidCode).toThrow(Error);

// // You can also use the exact error message or a regexp
// expect(compileAndroidCode).toThrow('you are using the wrong JDK');
// expect(compileAndroidCode).toThrow(/JDK/); <-- RegExp



//******************
// mock dados
//******************

// const mockCharacters = [
//   { name: 'anakin skywalker', nickname: 'darth vader' },
//   { name: 'leia organa' },
//   { name: 'luke skywalker' },
//   { name: 'r2-d2' },
//   { name: 'c3po' },
// ];

//******************
// mock função
//******************

// const mock = jest.fn();
// const mockFn = jest.fn(() => true);
// // ou utilizando .mockImplementation passando uma nova implementação
// const mockFn = jest.fn().mockImplementation(() => true);
// // ou utilizando .mockReturnedValue passando o valor de retorno diretamente
// const mockFn = jest.fn().mockReturnedValue(true);

// mockFn.mock.calls
// mockFn.mock.results
// mockFn.mockImplementation(fn)
// mockFn.mockImplementationOnce(fn)
// mockFn.mockReturnThis()
// mockFn.mockReturnValue(value)
// mockFn.mockReturnValueOnce(value)
// mockFn.mockResolvedValue(value)
// mockFn.mockResolvedValueOnce(value)
// mockFn.mockRejectedValue(value)
// mockFn.mockRejectedValueOnce(value)

//******************
// mock módulos
//******************

// jest.mock('./is-alive');
// // ou
// jest.mock('./is-alive', () => {
//   return {
//     isAlive: jest.fn();
//   }
// });

// ******** limpar após o teste USAR HOOKS
// // limpa as execuções
// // mas mantém as implementações
// mockFn.mockClear();

// // limpa as execuções
// // e as implementações
// mockFn.mockReset();

// // limpa as execuções
// // e as implementações
// // e também faz com que a função retorne ao seu valor original
// // antes do mock
// mockFn.mockRestore();


//******************
// mock espião
//******************

// const espiao = jest.spyOn(logger, 'log');
// ******* limpar após o teste USAR HOOKS
// espiao.mockRestore();


//******************
// test callback, try/catch pra erro
//******************

// describe('consultaPersonagens', () => {
//   it('consulta personagens com sucesso', done => {
//     const callbackDeSucesso = personagens => {
//       // try/catch adicionado
//       try {
//         expect(personagens.length).toEqual(5);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     };

//     consultaPersonagens(callbackDeSucesso);
//   });
// });

//******************
// test promisse, asserções para os cenários de falha
//******************

// describe('consultaPersonagens', () => {
//   it('consulta personagens com sucesso', () => {
//     return consultaPersonagens().then(personagens => {
//       expect(personagens.length).toEqual(5);
//     });
//   });

//   // caso de erro
//   it('consulta personagens com erro', () => {
//     // indicamos quantas asserções teremos
//     expect.assertions(1);

//     // retornamos promise que resolverá com erro
//     return consultaPersonagens().catch(error => {
//       expect(error).toMatch('error');
//     });
//   });
// });