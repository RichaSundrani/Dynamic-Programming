/*
 #1. Make it work - use brute force
    - visualize the problem as a tree 
    - implement the tree using recurssion 
    - test it make sure it works for smaller inputs and returns correct output
 #2. Make it efficient 
     - add a memorize/ memo object 
     - add a base case to return memo values 
     - store return value into the memo
     - test it with big inputs 
*/


/*
The Fibonacci Sequence is the series of numbers:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it:
*/

// Q. find the nth number in fibonacci sequence
// let fibonacci = (n) => {
//     if (n <= 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(7)); // 13
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(15)); // 610
// console.log(fibonacci(50));  // takes too long to execute...

// Memorization 
let fibonacci = (n, memorize = {}) => {
    if (n in memorize) {
        return memorize[n];
    }
    if (n <= 2) {
        return 1;
    }
    memorize[n] = fibonacci(n - 1, memorize) + fibonacci(n - 2, memorize);
    return memorize[n];
};

console.log(fibonacci(50)) // 12586269025


// let obj = {
//     name1 :"Richard", 
//     location : "uk"
// }
// console.log("name1" in obj); // true 
// console.log("location" in obj); // true 
// console.log("color" in obj); // false 
