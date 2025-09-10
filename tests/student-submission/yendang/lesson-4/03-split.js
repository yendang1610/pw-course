const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ(dùng khoảng trắng).

let result1 = name.split(' ');
console.log('Mang cac tu sau khi chia tach la: ', result1);

// 2. Chia emails thành mảng các email(dùng dấu phẩy).

let result2 = emails.split(',');
console.log('Mang cac email sau khi chia tach la: ', result2);

// 3. Chia date thành mảng ngày, tháng, năm(dùng dấu gạch ngang).

let result3 = date.split('-');
console.log('Mang ngay, thang, nam sau khi chia tach la: ', result3);