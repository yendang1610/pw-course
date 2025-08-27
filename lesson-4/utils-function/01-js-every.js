const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//1.1 Kiem tra tat ca gia tri trong scores co >70 khong
let result1 = scores.every((val) => val > 70);
console.log('Kiem tra cac gia tri trong score co lon hon 70 khong: ', result1);

//1.2 Kiem tra tat ca gia tri trong ages co >15 khong
let result2 = ages.every((val) => val > 15);
console.log('Kiem tra cac gia tri trong age co lon hon 15 khong: ', result2);

//1.3 Kiem tra tat ca cac tu trong words co do dai > 3 khong
let result3 = words.every((word) => word.length > 3);
console.log('Kiem tra tat ca cac tu trong words co do dai > 3 khong', result3);