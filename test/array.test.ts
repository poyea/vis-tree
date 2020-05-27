import { randomArray } from '../src/array';
import { expect } from 'chai';

describe('Function for generating random arrays', () => {
  it('should return arrays of length N', () => {
    expect(randomArray(20)).to.have.deep.property('length', 20);
    expect(randomArray(0)).to.have.deep.property('length', 0);
    expect(randomArray()).to.have.deep.property('length', 10);
  });

  it('should return arrays of correct elements', () => {
    const arr1 = randomArray(10, 0, 9);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).to.include.members(arr1);
    const arr2 = randomArray(10, -1, 10);
    expect([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).to.include.members(arr2);
    expect(randomArray(1, 0, 0)).include.members([0]);
  });

  it('should reject bad parameters', (done) => {
    expect(() => randomArray(-1)).to.throw(
      RangeError,
      'array: N must be non-negative'
    );
    expect(() => randomArray(5.7)).to.throw(TypeError);
    expect(() => randomArray(-77.999)).to.throw(TypeError);
    expect(() => randomArray(7, 10, 8)).to.throw(
      RangeError,
      'array: lower must be less than upper'
    );
  });
});
