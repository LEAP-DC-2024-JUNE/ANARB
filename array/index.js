// const array = [
//     {
//         name: "Bill",
//         age: 10,
//         siblings: [
//             {
//                 name: "Bolor",
//                 age: 11,
//             },
//             {
//                 name: "Boldoo",
//                 age: 9,
//             },
//         ],
//     },
// ];
// console.log(array[0].siblings[1].name);

// const array = [
//     [
//         {
//             name: "Bill",
//         },
//         {
//             name: "Dul",
//         },
//     ],
//     [
//         {
//             name: "Alungoo",
//         },
//         {
//             name: "Munkuush",
//         },
//     ],
// ];
// console.log(array[0][1].name);

// Reverse Array

// const array = [1, 2, 3, 4, 5];
// const newArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     newArray[newArray.length] = array[i];
// }
// console.log(newArray)

// Array Methods

// Reverse
// const array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array);

// Sort
// const array = [2, 3, 1, 0, 4];
// array.sort();
// console.log(array);

// toString
// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// console.log(fruits.toString());

// // Includes
// const array = [100, 200];
// console.log(array.includes(200));

// Push
// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// Pop
// const array = [1, 2, 3];
// array.pop();
// console.log(array);

// Number Pow
// let n = prompt();
// let result = 1;
// let pow;

// for (pow = 0; result < 1000; pow++){
//     if (n == 1 || n >= 1000) {
//         console.log("Боломжгүй")
//         break;
//     }
//     else {
//         result = n ** pow;
//     }
// }
// console.log(n,"-н", pow, "зэрэг 1000-с их байна:", result)

let n = prompt();
let result = 0;
let pow;

for (pow = 0; result < Infinity; pow++) {
  result = n ** pow;
  if (result > 1000) {
    console.log(n, "-н", pow, "зэрэг 1000-с их байна:", result);
    break;
  } else if (n == 1 || n >= 1000) {
    console.log("Боломжгүй");
    break;
  }
}

// let n = prompt();
// let result = 1;
// let pow = 0;

// while (result < 1000) {
//     if (n == 1 || n >= 1000) {
//         console.log("Боломжгүй")
//         break;
//     }
//     else {
//         pow++;
//         result = n ** pow;
//     }
// }
// console.log(n,"-н", pow, "зэрэг 1000-с их байна:", result)

// Includes Method

// const array = [100, 200, 300, 400, 500];
// let inc = prompt();

// for (let i = 0; i <= array.length - 1; i++) {
//     if (array[i] == inc) {
//         console.log("Array includes", inc);
//     }
//     else {
//         console.log("Array does not includes", inc)
//     }
// }

// Sort Method
// const array = [2, 3, 1, 0, 4];
// const newArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] > array [i-1]) {
//         newArray[newArray.length - 1] = array[i]
//     }
// }
// console.log(newArray)

// const array = [2, 3, 1, 0, 4];
// const newArray = [];
// for (let i = 1; i < array.length; i++) {

// }

// Sort method
// const array = [2, 3, 1, 0, 4, 9, 8 , 10];
// let a;
// for (let i = 0; i < array.length;) {
//     if (array[i] > array[i + 1]) {
//         a = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = a;
//         i--;
//     }
//     else {
//         i++;
//     }
// }
// console.log(array)

const arr = [1, 5, 3, 4, 100];

let sum = 0;
arr.map((element) => {
  sum = sum + element;
});
