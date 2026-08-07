// Slice
const fruits = ["apple", "banana", "mango", "orange", "grape"];

const sliced = fruits.slice(1, 4);
// console.log(sliced);

// Reduce (Optional / Advanced)
let nums = [10, 20, 30, 40, 50];


// acc-> elem 10: 0 + 10 = 10 
// acc-> elem 20: 10 + 20 = 30 
// acc-> elem 30: 30 + 30 = 60 
// acc-> elem 40: 60 + 40 = 100 
// acc-> elem 50: 1000 + 50 = 150 
let sum = nums.reduce((accumulator, elem, ind, arr) => {
    console.log("Accumulator-> ", accumulator, " - elem: ", elem);
  return accumulator + elem;
}, 0);

console.log(sum);