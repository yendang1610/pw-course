const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//2.1 Loc cac gia tri trong scores > 80
let result1 = scores.filter((val) => val > 80);
console.log('Cac gia tri lon hon 80 la: ', result1);

//2.2 Loc cac gia tri trong ages >=18
let result2 = ages.filter((val) => val = 18);
console.log('Cac gia tri lon hon hoac bang 18 la: ', result2);

//2.3 Log cac tu trong words co do dai > 5

let result3 = words.filter((word) => word.length > 5);
console.log('Cac gia tri lon hon 5 la: ', result3);