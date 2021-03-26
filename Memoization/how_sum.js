/*
Write a function howSum(targetSum, numbers) that takes a targetSum and an array of numbers as arguments. 
The function shoud return an array containing any combination of elements that add up to targetSum. 
If there is no combination of elements that adds up to targetSum then return null. 
*/

// Brute force  - time : O(n^m*m)  - space : O(m)
// const howSum = (targetSum, numbers) => {
//     if (targetSum === 0) {
//         return [];
//     }
//     if (targetSum < 0) {
//         return null;
//     }
//     for (let num of numbers) {
//         const remainderResult = howSum(targetSum - num, numbers);
//         if(remainderResult !== null ){
//             return [...remainderResult, num];
//         }
//     }
//     return null;
// };


// Memorization  - time : O(n*m^2)  - space : O(m^2)
const howSum = (targetSum, numbers, memorize = {}) => {
    if (targetSum in memorize) {
        memorize[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (let num of numbers) {
        const remainderResult = howSum(targetSum - num, numbers);
        // console.log(`remainderResult -- ${remainderResult}`);
        if (remainderResult !== null) {
            memorize[targetSum] = [...remainderResult, num];
            // console.log(memorize[targetSum]);
            return memorize[targetSum];
        }
    }
    memorize[targetSum] = null;
    return memorize[targetSum];
};


console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3] or [7]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [5, 3, 2])); // [3, 5]
console.log(howSum(300, [7, 14])); // null



