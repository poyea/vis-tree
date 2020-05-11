#!/usr/bin/env node
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

import { array } from './array'
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const path = require('path')
const program = require('commander')

clear()
console.log(
  chalk.blue(
    figlet.textSync('vis-tree', { font: 'Epic', horizontalLayout: 'full' })
  )
)

program
  .name('vis-tree')
  .version('0.1.0')
  .description('A toolbox for you to visualize your data structures.')
  .option('-a, --array', "array's toolbox")
  .option('-t, --tree', "tree's toolbox")
  //.option('-r, --random', 'get a randomized output')
  .option('-s, --sorted', 'return an increasingly sorted array')
  .option('-rs, --rsorted', 'return a decreasingly sorted array')
  .option('-l, --low <integer>', 'set value of minimum element', '-1e9')
  .option('-h, --high <integer>', 'set value of maximum element', '1e9')
  .option('-N <integer>', 'set length/size of output', '10')
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

let min: number = -1e9,
  max: number = 1e9,
  N: number = 10,
  sorted: boolean = false,
  rsorted: boolean = false
min = program.low ? Number(program.low) : min
max = program.high ? Number(program.high) : max
N = program.size ? Number(program.size).valueOf() : N
sorted = program.sorted ? true : false
rsorted = program.rsorted ? true : false

if (sorted === rsorted && sorted === true) {
  (sorted = false), (rsorted = false)
}

//if (!program.random && !program.low && !program.high && !program.size) {
if (!program.low && !program.high && !program.size) {
  console.log('You have to at least specify some parameters.')
}

//if (program.array && program.random) {
if (program.array) {
  console.log(`[${array(N, min, max, sorted, rsorted)}]`)
}
