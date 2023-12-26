//for-of loop
// let str = "sugyan";

// let size = 0;
// for(let i of str) { //iterator -> characters
//     console.log("Value =",i);
//     size++;
// }

// console.log("string size =", size); //6

//for-in Loop

let student = {
    name: "Sugyan Lama",
    age: 14,
    cgpa: 8,
    isPass: true,
};

for (let key in student) {
    console.log("key=", key, "value =", student[key]);
}