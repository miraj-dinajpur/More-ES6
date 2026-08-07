let numbers = [2, 4, 6, 8, 10];

// let double = []
// for(let i = 0; i<numbers.length; i++){
//     double.push(numbers[i]*2)
// }

// map: to modify array and get new array
const double = numbers.map((elem) => elem * 2);

// console.log(double);

// Foreach: simply iterate loop
let rolls = [10, 12, 24, 30];

rolls.forEach((elem, ind, arr) => {
  // console.log(elem, ind, arr);
  // Logic
});

// Filter: filter out element and create new array based on condition

let prices = [100, 200, 300, 400, 500, 600, 1500];

let expensiveProducts = prices.filter((elem) => elem >= 500);
// console.log(expensiveProducts);

// Find: Find out first element  based on condition
let prices2 = [600, 100, 200, 300, 400, 501, 500, 600, 1500];

let expensiveProduct = prices2.find((elem) => elem >= 500);
// console.log(expensiveProduct);

let phones = [
  {
    model: "iPhone 15",
    price: 72000,
  },
  {
    model: "iPhone 16",
    price: 86000,
  },
  {
    model: "iPhone 17",
    price: 92000,
  },
  {
    model: "S25 Ultra",
    price: 92000,
  },
  {
    model: "Tecno",
    price: 15000,
  },
  {
    model: "Samsung A07",
    price: 17000,
  },
];

// expensive phones: 50000>=
// Cheapest phones: 20000<=

let expensivePhones = phones.filter((phone) => phone.price >= 500000);
let cheapestPhones = phones.filter((phone) => {
  //   console.log(phone);
  return phone.price <= 20000;
});
console.log(expensivePhones);
// console.log(cheapestPhones);

let students = [
  {
    name: "Utsho",
    roll: 29,
  },
  {
    name: "Habib",
    roll: 30,
  },
];
const findSpecificStudent = students.find(
  (student) => student.name === "Akash",
);
console.log(findSpecificStudent);
