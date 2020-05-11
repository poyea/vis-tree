import { array } from '../src/array'
import { expect } from 'chai'

describe('Function for generating random arrays', () => {
  it('should return arrays of length N', () => {
    expect(array(20)).to.have.deep.property('length', 20)
    expect(array(0)).to.have.deep.property('length', 0)
    expect(array()).to.have.deep.property('length', 10)
  })

  it('should return arrays of correct elements', () => {
    const arr1 = array(10, 0, 9)
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).to.include.members(arr1)
    const arr2 = array(10, -1, 10)
    expect([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).to.include.members(arr2)
    expect(array(1, 0, 0)).include.members([0])
  })

  it('should reject bad parameters', (done) => {
    expect(() => array(-1)).to.throw(
      RangeError,
      'array: N must be non-negative'
    )
    expect(() => array(5.7)).to.throw(TypeError)
    expect(() => array(-77.999)).to.throw(TypeError)
    expect(() => array(7, 10, 8)).to.throw(
      RangeError,
      'array: lower must be less than upper'
    )
    done()
  })
})
