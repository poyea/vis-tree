export function randomTree(
    N: number = 8,
    lower: number = -1e9,
    upper: number = 1e9,
    requireBST: boolean = false,
  ): (string|number)[] {
    if (N == null || !Number.isInteger(N)) {
      throw new TypeError('array: N must be an integer')
    }
    if (N < 0) {
      throw new RangeError('array: N must be non-negative')
    }

    const _outputArray = []
    for(let i = 0; i < N; ++i){
      _outputArray.push('null')
    }

    for (let i = 0; i < N; i++) {
        let _chknull: boolean = Math.floor(Math.random() * 3) == 0;
        if(i == 0 || (!_chknull && _outputArray[Math.floor(i-1)/2] != 'null')){
            _outputArray[i] = Math.floor(Math.random() * (upper.valueOf() + 1 - lower.valueOf())) + lower.valueOf()
        }
    }

    if (requireBST) {
      //TODO
    }

    return _outputArray
  }
  