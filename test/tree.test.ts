import { randomTree } from '../src/tree';
import { expect } from 'chai';

describe('Function for generating random arrays', () => {
  it('should have a non-null root', () => {
    expect(randomTree(1)).to.not.equal(['null']);
  });

  it('should have N non-null nodes', () => {
    expect(randomTree(10)).to.satisfy((arr: (string | number | void)[]) => {
      return (
        arr.filter((e) => {
          return e !== 'null';
        }).length == 10
      );
    });

    expect(randomTree()).to.satisfy((arr: (string | number | void)[]) => {
      return (
        arr.filter((e) => {
          return e !== 'null';
        }).length == 8
      );
    });
  });

  it('should reject bad parameters', () => {
    expect(() => randomTree(-1)).to.throw(
      RangeError,
      'tree: N must be positive'
    );
    expect(() => randomTree(0)).to.throw(
      RangeError,
      'tree: N must be positive'
    );
    expect(() => randomTree(5.7)).to.throw(TypeError);
    expect(() => randomTree(-77.999)).to.throw(TypeError);
  });
});
