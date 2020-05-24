import { randomTree } from '../src/tree'
import { expect } from 'chai'

describe('Function for generating random arrays', () => {

  it('should have non null root', () => {
    expect(randomTree()).to.not.equal(['null'])
  })

  it('should return arrays of length 8', () => {
    expect(randomTree()).to.have.deep.property('length', 8)
  })

  
  it('should reject bad parameters', (done) => {
    expect(() => randomTree(-1)).to.throw(
      RangeError,
      'array: N must be non-negative'
    )
    expect(() => randomTree(5.7)).to.throw(TypeError)
    expect(() => randomTree(-77.999)).to.throw(TypeError)

    done()
  })

})
