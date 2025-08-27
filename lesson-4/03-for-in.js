const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//3.1 In tên và giá trị mỗi thuộc tính của student

for (let nameProperty in student) {
    console.log('Ten cac thuoc tinh cua object student la: ', nameProperty);
}

for (let valProperty in student) {
    console.log('Gia tri cua thuoc tinh cua object student la: ', student[valProperty]);
}

// 3.2 Tính tổng các giá trị số trong student
// Bài này chị chưa biết làm thế nào

//3.3 Tạo mảng chứa tên các thuộc tính của student

let studentProperty = [];
for (let nameProperty in student) {
    studentProperty.push(nameProperty);
}
console.log('mang moi gom cac thuoc tinh cua student la: ', studentProperty);