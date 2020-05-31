import { randomArray } from './array';
import { Node } from './INode';
import { Z_STREAM_END } from 'zlib';

function treeToArray(root: Node, array: (string | number | void)[]) {
  if (root === undefined && array.length > 0) {
    array.push('null');
    return;
  } else {
    array.push(root.value);
    treeToArray(root.left!, array);
    treeToArray(root.right!, array);
  }
}


export function randomTree(
  N: number = 8,
  lower: number = -1e9,
  upper: number = 1e9,
  requireBST: boolean = false
): (string | number | void)[] {
  if (N == null || !Number.isInteger(N)) {
    throw new TypeError('tree: N must be an integer');
  }
  if (N <= 0) {
    throw new RangeError('tree: N must be positive');
  }

  const _ranArr: number[] = randomArray(N, lower, upper);

  const _rootValue: number | undefined = _ranArr.pop();
  const root: Node = {
    value: _rootValue!,
    left: undefined,
    right: undefined
  };

  while (_ranArr.length > 0) {
    const _nodeValue: number | undefined = _ranArr.pop();
    let _pointNode: Node = root;
    while (true) {
      if (_pointNode.value <= _nodeValue! && _pointNode.right === undefined) {
        _pointNode.right = {
          value: _nodeValue!,
          left: undefined,
          right: undefined
        };
        break;
      } else if (
        _pointNode.value > _nodeValue! &&
        _pointNode.left === undefined
      ) {
        _pointNode.left = {
          value: _nodeValue!,
          left: undefined,
          right: undefined
        };
        break;
      }
      if (_pointNode.value <= _nodeValue!) {
        _pointNode = _pointNode.right!;
      } else if (_pointNode.value > _nodeValue!) {
        _pointNode = _pointNode.left!;
      }
    }
  }

  const _outputArray: (string | number | void)[] = [];
  treeToArray(root, _outputArray);
  for(let i: number = _outputArray.length - 1; i >= 0; i--){
    if(String(_outputArray[i]) === 'null'){
      _outputArray.pop();
    }else{
      break;
    }
  }
  return _outputArray;
}
