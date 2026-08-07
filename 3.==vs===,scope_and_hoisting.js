// == => loose equality
// === => strict equality
// console.log(5 == "5");   
// console.log(5 === "5");   

// console.log(0 == false);  
// console.log(0 === false); 

// console.log(null == undefined); 
// console.log(null === undefined); 



// Scope
// 3 types -> 1. Global scope, 2. Block scope, 3. Function scope
// var maintain function scope only
// let and const maintains block and function scope both


//  1. Global scope
let name = "Utsho"

// if(true){
//     console.log(name);
// }

// for(let i = 0; i<5;i++){
//     console.log(name);
// }



// 2. Block scope


if(true){
    let age = 54
    console.log(age);
}
for(let i = 0; i<5;i++){
    let test = "something"    
}
// console.log(test);

{
    var address = "Badda, Dhaka"
}
console.log(address);

// console.log(age);


function add(a, b){
    var sum = a+b;
    return sum
}
// console.log(sum);

// console.log(add(10, 15));