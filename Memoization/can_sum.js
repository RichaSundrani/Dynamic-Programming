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
    Write a function canSum(targetSum, numbers) that takes in a targetSum and an numbers array as arguments.
    The function should return a boolean indicating whether or not it is possible to generate the targetSum from the array.
    Assumptions :
        - you may use the element of the array as many times as needed.
        - you may assume that all input numbers are non-negative.
    canSum(7, [5,3,4,7]) ==> true
    canSum(7, [2,4]) ==> false
*/
// Brute force
// const canSum = (targetSum, numbers) => {
//     if (targetSum === 0) {
//         return true;
//     }
//     if (targetSum < 0) {
//         return false;
//     }
//     for (let num of numbers) {
//         if (canSum(targetSum - num, numbers) === true) {
//             return true;
//         }
//     }
//     return false;
// }

//Memorization 
const canSum = (targetSum, numbers, memorize = {}) => {
    if(targetSum in memorize) {
        return memorize[targetSum];
    }
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (let num of numbers) {
        memorize[targetSum] = canSum(targetSum - num, numbers, memorize);
        if (memorize[targetSum] === true) {
            return true;
        }
    }
    return false;
}


console.log(canSum(7, [5, 3, 4, 7]));  // true
console.log(canSum(7, [2, 4]));  // false
console.log(canSum(8, [2, 3, 5]));  // true
console.log(canSum(500, [7, 14]));  // false

