// two data types _ 1. primitive data type: string, number, boolean, undefined, null

let name = "Utsho";
let name2 = name;
let age = 26;
let isMarried = false;
let universityResult = undefined;
let salary = null;


name = "Habib"
console.log(name2);

// console.log(
//   typeof name,
//   typeof age,
//   typeof isMarried,
//   typeof universityResult,
//   typeof salary,
// );

// 2. Non primitive data type: function , object and array
let student = {
  name: "Utsho",
};
let student2 = {...student};
let arr = [100, 300, 30];
let arr2 = [...arr];
function add(a, b) {
  return a + b;
}
// console.log(typeof student, typeof arr, typeof add);

student.age = 26
console.log(student2);

arr2.push(400)
console.log(arr);