export function randomTree(
    N: number = 7,
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
    for (let i = 0; i < N; i++) {
        const _chknull: boolean = Math.floor(Math.random() * 11) % 2 == 0;
        if(_chknull){
            _outputArray.push('null')
        }else{
            _outputArray.push(
                Math.floor(Math.random() * (upper.valueOf() + 1 - lower.valueOf())) +
                  lower.valueOf()
              )
        }
    }
    if (requireBST) {
      //TODO
    }

    return _outputArray
  }
  