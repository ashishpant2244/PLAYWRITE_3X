//Searching

let results = ["pass", "fail", "pass", "error", "fail","top", "bottom"];

// indexOf — returns first index, or -1 if not found

let result = results.indexOf("fail"); //1
let result1 = results.indexOf("skip");  // -1
console.log(result);
console.log(result1);

// lastIndexOf — searches from the end
let result2 = results.lastIndexOf("fail");
console.log(result2);

// includes — returns boolean
let result3 = results.includes("error"); // true
console.log(result3);