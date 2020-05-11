import { array } from '../src/array'

console.log(
  `An array of length 10 without specific min and max: [${array(10)}]`
)
console.log(`An array of length 10 from 0 to 9: [${array(10, 0, 9)}]`)
