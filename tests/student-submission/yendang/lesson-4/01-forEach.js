const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//1.1 In lần lượt từng phần tử của numbers
numbers.forEach((val, index) => {
    console.log(`index ${index}: ${val}`);
});

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
for (let i = 0; i <= numbers.length; i++) {
    sum = sum + i;
};
console.log('Tổng của mảng numbers = ', sum);

//1.3 Tạo mạng mới từ numbers, mỗi phần tử nhân đôi

let newNumbers = numbers.map((val) => val * 2);
console.log('Mảng mới có giá trị nhân đôi từ mảng cũ là: ', newNumbers);

