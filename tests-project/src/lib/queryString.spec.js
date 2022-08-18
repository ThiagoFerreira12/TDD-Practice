const { queryString } = require('./queryString');

describe('Object to query string', () => {
  test('should be create a valide query string', () => {
    const obj = {
      name: 'Thiago',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=Thiago&profession=Developer');
  });

  test('should create valid query string with even when an array', () => {
    const obj = {
      name: 'Thiago',
      abilities: ['Developer,React'],
    };
    expect(queryString(obj)).toBe('name=Thiago&abilities=Developer,React');
  });

  test('should throw an error when an object is passed', () => {
    const obj = {
      name: 'Thiago',
      abilities: {
        first: 'Developer',
        second: 'React',
      },
    };
    expect(() => queryString(obj)).toThrowError();
  });
});
