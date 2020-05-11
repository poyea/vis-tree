# <p align="center">vis-tree</p>
<p align="center">Command line tool for generation of data structures.</p>

```
|\     /|\__   __/(  ____ \       \__   __/(  ____ )(  ____ \(  ____ \
| )   ( |   ) (   | (    \/          ) (   | (    )|| (    \/| (    \/
| |   | |   | |   | (_____  _____    | |   | (____)|| (__    | (__
( (   ) )   | |   (_____  )(_____)   | |   |     __)|  __)   |  __)
 \ \_/ /    | |         ) |          | |   | (\ (   | (      | (
  \   /  ___) (___/\____) |          | |   | ) \ \__| (____/\| (____/\
   \_/   \_______/\_______)          )_(   |/   \__/(_______/(_______/
```

## Current options
```
Usage: vis-tree [options]

A toolbox for you to visualize your data structures.

Options:
  -V, --version         output the version number
  -a, --array           array's toolbox
  -t, --tree            tree's toolbox
  -s, --sorted          return an increasingly sorted array
  -rs, --rsorted        return a decreasingly sorted array
  -l, --low <integer>   set value of minimum element (default: "-1e9")
  -h, --high <integer>  set value of maximum element (default: "1e9")
  -N <integer>          set length/size of output (default: "10")
  --help                display help for command
```

## Build from source
First, you need to clone the project. Then,
```
npm install 
npm run create
```

## Run tests
We use mocha and chai.
```
npm test
```

## Work in progress 
* A LOT

## If you like this, please
* Star
* Fork
* Contribute

## License
This repository is licensed under the [MIT](https://opensource.org/licenses/MIT) License. See also [LICENSE](LICENSE) for details.