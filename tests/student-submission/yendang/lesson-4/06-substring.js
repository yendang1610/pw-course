const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6)

let result1 = fullName.substring(0,6);
console.log('Trích xuất họ từ fullName: ', result1);

// 2. Trích xuất năm từ date (4 ký tự đầu)

let result2 = date.substring(0, 4);
console.log('Trích xuất năm từ date: ', result2);

// 3. Trích xuất tên miền từ email (từ sau "@")

let result3 = email.substring(8);
console.log('Trích xuất tên miền từ email: ', result3);

