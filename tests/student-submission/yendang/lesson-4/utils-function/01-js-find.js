const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//3.1 Tim gia tri dau tien trong score > 80

let result1 = scores.find((val) => val > 80);
console.log('Gia tri dau tien lon hon 80 la: ',result1 );

//3.2 Tim gia tri dau tien trong ages > 20

let result2 = ages.find((val) => val > 20);
console.log('Gia tri dau tien lon hon 20 la: ', result2);

//3.3 Tim tu dau tien trong word co do dai > 5

let result3 = words.find((word) => word.length > 5);
console.log('Tu dau tien co do dai lon hon 5 la: ', result3);

