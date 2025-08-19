// const height = 155;
// console.log("Cân nặng lý tưởng của bạn là: " + (height-100)*0.9 + " kg ; " + "Cân nặng tối đa là: " + (height-100) + " kg ; " + "Cân nặng tối thiểu là: " + (height-100)*0.8 + " kg")

const { Console } = require("console");

const height = 155;
const idealweight = (height - 100) * 0.9;
const maxweight = (height - 100);
const minweight = (height - 100) * 0.8;

console.log("Cân nặng lý tưởng của bạn là: ", idealweight, " kg");
console.log("Cân nặng tối đa là: ", maxweight, " kg");
console.log("Cân nặng tối thiểu là: ", minweight, " kg");
