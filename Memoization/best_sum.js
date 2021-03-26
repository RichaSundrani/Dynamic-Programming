/*
Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
Theh function should return an array containing the shortest combination of numbers that add up to the targetSum. 
If there is a tie for the shortest combination, you can return any one of the shortest.
*/


// Brute force  - time : O()  - space : O()
// const bestSum = (targetSum, numbers) => {
//     if (targetSum === 0) {
//         return [];
//     }
//     if (targetSum < 0) {
//         return null;
//     }
//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainderResult = bestSum(targetSum - num, numbers);
//         if (remainderResult !== null) {
//             const combination =  [...remainderResult, num];
//             if(shortestCombination === null || combination.length < shortestCombination.length){
//                 shortestCombination = combination;
//             }
//         }
//     }
//     return shortestCombination;
// }

// Memorization 
const bestSum = (targetSum, numbers, memorize = {}) => {
    if (targetSum in memorize) {
        return memorize[memorize];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    let shortestCombination = null;

    for (let num of numbers) {
        const remainderResult = bestSum(targetSum - num, numbers, memorize);
        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memorize[memorize] = shortestCombination;
    return shortestCombination;
}

// console.log(bestSum(15)); // [3,2,2]
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSum(8, [5, 3, 2])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [2, 25, 50])); // [50, 50, 50, 50]
console.log("Break");
