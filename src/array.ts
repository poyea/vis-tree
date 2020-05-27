export function randomArray(
  N: number = 10,
  lower: number = -1e9,
  upper: number = 1e9,
  requireSort: boolean = false,
  requireRSort: boolean = false
): number[] {
  if (N == null || !Number.isInteger(N)) {
    throw new TypeError('array: N must be an integer');
  }
  if (N < 0) {
    throw new RangeError('array: N must be non-negative');
  }
  if (lower > upper) {
    throw new RangeError('array: lower must be less than upper');
  }
  const _outputArray = [];
  for (let i = 0; i < N; i++) {
    _outputArray.push(
      Math.floor(Math.random() * (upper.valueOf() + 1 - lower.valueOf())) +
        lower.valueOf()
    );
  }
  if (requireSort) {
    _outputArray.sort((a, b) => a - b);
  } else if (requireRSort) {
    _outputArray.sort((a, b) => b - a);
  }
  return _outputArray;
}
