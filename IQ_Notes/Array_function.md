| Method                      | Purpose                                             | Changes Original Array? | Returns                | Example                            |
| --------------------------- | --------------------------------------------------- | ----------------------- | ---------------------- | ---------------------------------- |
| `push()`                    | Add element(s) to the end                           | ✅ Yes                   | New length             | `arr.push(4)`                      |
| `pop()`                     | Remove the last element                             | ✅ Yes                   | Removed element        | `arr.pop()`                        |
| `unshift()`                 | Add element(s) to the beginning                     | ✅ Yes                   | New length             | `arr.unshift(1)`                   |
| `shift()`                   | Remove the first element                            | ✅ Yes                   | Removed element        | `arr.shift()`                      |
| `concat()`                  | Join two or more arrays                             | ❌ No                    | New array              | `arr1.concat(arr2)`                |
| `slice()`                   | Copy part of an array                               | ❌ No                    | New array              | `arr.slice(1,3)`                   |
| `splice()`                  | Add, remove, or replace elements                    | ✅ Yes                   | Removed elements       | `arr.splice(1,2)`                  |
| `includes()`                | Check if a value exists                             | ❌ No                    | `true`/`false`         | `arr.includes(5)`                  |
| `indexOf()`                 | Find the first index of a value                     | ❌ No                    | Index or `-1`          | `arr.indexOf(10)`                  |
| `lastIndexOf()`             | Find the last index of a value                      | ❌ No                    | Index or `-1`          | `arr.lastIndexOf(10)`              |
| `find()`                    | Return the first matching element                   | ❌ No                    | Element or `undefined` | `arr.find(x => x > 5)`             |
| `findIndex()`               | Return index of first match                         | ❌ No                    | Index or `-1`          | `arr.findIndex(x => x > 5)`        |
| `filter()`                  | Return all matching elements                        | ❌ No                    | New array              | `arr.filter(x => x > 5)`           |
| `map()`                     | Transform every element                             | ❌ No                    | New array              | `arr.map(x => x * 2)`              |
| `forEach()`                 | Execute a function for each element                 | ❌ No                    | `undefined`            | `arr.forEach(x => console.log(x))` |
| `reduce()`                  | Reduce array to a single value                      | ❌ No                    | Single value           | `arr.reduce((a,b)=>a+b,0)`         |
| `some()`                    | Check if at least one element matches               | ❌ No                    | `true`/`false`         | `arr.some(x => x > 10)`            |
| `every()`                   | Check if all elements match                         | ❌ No                    | `true`/`false`         | `arr.every(x => x > 0)`            |
| `sort()`                    | Sort the array                                      | ✅ Yes                   | Sorted array           | `arr.sort()`                       |
| `reverse()`                 | Reverse the array                                   | ✅ Yes                   | Reversed array         | `arr.reverse()`                    |
| `join()`                    | Convert array to string                             | ❌ No                    | String                 | `arr.join("-")`                    |
| `split()` *(String method)* | Convert string to array                             | ❌ No                    | Array                  | `"a,b".split(",")`                 |
| `flat()`                    | Flatten nested arrays                               | ❌ No                    | New array              | `arr.flat()`                       |
| `flatMap()`                 | Map then flatten one level                          | ❌ No                    | New array              | `arr.flatMap(x => [x,x])`          |
| `fill()`                    | Fill array with a value                             | ✅ Yes                   | Modified array         | `arr.fill(0)`                      |
| `copyWithin()`              | Copy part of array within itself                    | ✅ Yes                   | Modified array         | `arr.copyWithin(0,2)`              |
| `at()`                      | Access element by index (supports negative indexes) | ❌ No                    | Element                | `arr.at(-1)`                       |
| `Array.isArray()`           | Check if a value is an array                        | ❌ No                    | `true`/`false`         | `Array.isArray(arr)`               |
| `Array.from()`              | Create an array from iterable or array-like object  | ❌ No                    | New array              | `Array.from("ABC")`                |
| `Array.of()`                | Create array from arguments                         | ❌ No                    | New array              | `Array.of(1,2,3)`                  |
