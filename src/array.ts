/*
    MIT License

    Copyright (c) 2020 John Law @poyea

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

*/

export function array(
  N: number = 10,
  lower: number = -1e9,
  upper: number = 1e9,
  requireSort: boolean = false,
  requireRSort: boolean = false
): number[] {
  if (N == null || !Number.isInteger(N)) {
    throw new TypeError('array: N must be an integer')
  }
  if (N < 0) {
    throw new RangeError('array: N must be non-negative')
  }
  if (lower > upper) {
    throw new RangeError('array: lower must be less than upper')
  }
  const _outputArray = []
  for (let i = 0; i < N; i++) {
    _outputArray.push(
      Math.floor(Math.random() * (upper.valueOf() + 1 - lower.valueOf())) +
        lower.valueOf()
    )
  }
  if (requireSort) {
    _outputArray.sort((a, b) => a - b)
  }
  if (requireRSort) {
    _outputArray.sort((a, b) => b - a)
  }
  return _outputArray
}
