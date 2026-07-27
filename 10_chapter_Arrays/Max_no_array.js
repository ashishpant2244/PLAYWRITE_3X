let input = [10, 20, 5, 15, 8, 30, 25, 12, 18, 22];

let max = input[0];

for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
        max = input[i];
    }
}

console.log(max);