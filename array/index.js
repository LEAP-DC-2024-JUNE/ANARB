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




const array = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    newArray[newArray.length] = array[i];
}
console.log(newArray)