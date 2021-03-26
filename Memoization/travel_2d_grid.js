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
Travel a 2d grid from top-left corner to the bottom-right corner. You can only move down or right no diagonal travel.
How many way you can travel to the goal (bottom-right corner) on a grid with dimensions m * n (m*n 2d array).
*/

// Brute force
// const gridTraveler = (m, n) => {
//     if (m === 1 && n == 1) {
//         return 1;
//     }
//     if (m === 0 || n == 0) {
//         return 0;
//     }
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };


// Memorization
const gridTraveler = (m, n, memorize = {}) => {

    // check if the arguments are in memorize object 
    const key = m + ',' + n;
    if (key in memorize) {
        return memorize[key];
    }
    if (m === 1 && n == 1) {
        return 1;
    }
    if (m === 0 || n == 0) {
        return 0;
    }
    memorize[key] = gridTraveler(m - 1, n, memorize) + gridTraveler(m, n - 1, memorize);
    return memorize[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(4, 3)); // 6
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(18, 18)); // 2333606220


