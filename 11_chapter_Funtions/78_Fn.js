// Without functions — repeated logic

// let score1 = 85;
// let result1 = score1 >= 70 ? "pass" : "fail";
// console.log(result1);

// let score2 = 45;
// let result2 = score2 >= 70 ? "pass" : "fail";
// console.log(result2);

// Define
function getResult(score){
    let result = score >= 70 ? "pass" : "fail";
       return result;
}

// Calling
let result1 = getResult(85); // Pass
let result2 = getResult(45); // Fail

 console.log(result1);
 console.log(result2);