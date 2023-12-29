// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val)=>{
//     return val > 3;
// });

// console.log(evenArr);


let arr = [5,6,2,1,3];

const output = arr.reduce((prev, curr)=>{
    return prev + curr;
});

console.log(output); //10


