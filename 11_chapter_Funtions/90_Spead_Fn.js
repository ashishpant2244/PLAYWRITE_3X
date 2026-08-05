function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3,5];
console.log(add(...num));

// ----
function hasError(...codes) {
    return codes.some(c => c >= 400);
}


let responseCodes = [200, 201, 40];
let responseCodes2 = [200, 201, 404, 500];
let result = hasError(...responseCodes);
let result2 = hasError(...responseCodes2);
console.log(result); // false
console.log(result2); // true