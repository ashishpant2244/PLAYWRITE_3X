let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

let result1 = nums.findLast(n => n > 20);
console.log(result1); //  45
let index1 = nums.findLastIndex(n => n > 20);
console.log(index1); // 3