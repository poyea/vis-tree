import { randomArray } from '../src/array'

console.log(
  `An array of length 10 without specific min and max: [${randomArray(10)}]`
)
console.log(`An array of length 10 from 0 to 9: [${randomArray(10, 0, 9)}]`)
