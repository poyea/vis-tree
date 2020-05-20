import { randomTree } from '../src/tree'
import { expect } from 'chai'

describe('Function for generating random arrays', () => {
  it('should return arrays of length 7', () => {
    expect(randomTree()).to.have.deep.property('length', 7)
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
