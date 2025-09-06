# Anonymous function
    • Hàm không có tên
    • Không có giá trị tái sử dụng, chỉ đóng vai trò là tham số cho 1 hàm khác
    • Chỉ được dùng 1 lần duy nhất
    • Hàm ẩn danh có cú pháp dài hơn 
    • Trong thực tế ít dùng hàm anonymous function

# Lambda function (Arrow function)

    • Viết function ngắn gọn hàm trong JS
    • Sử dụng dấu => thay vì dùng từ khóa function

# DOM - (Document Object Model)

Trong tab Element của Dev tool chứa tất cả DOM của trang web, đó chính là toàn bộ document liên quan đến các phần tử của trang web
    1. Có các kiểu thẻ như sau:
        ○ Thẻ mở, thẻ đóng
        ○ Thẻ tự đóng
    2. Một thẻ thường bao gồm các thành phần sau:
        Thẻ mở, thuộc tính, giá trị của thuộc tính, text, thẻ đóng
    3. Node là 1 thành phần trên trang web. Node đại diện cho phần tử trên trang web
    
# elector

    • Xpath selector
    • CSS selector
    • Playwright selector

## Xpath selector = XML path

### Xpath tuyệt đối
    • Đi dọc theo cây DOM, đi từ phần tử đầu tiên(cha) để đi đến phần tử con
    • Bắt đầu bằng 1 ký tự /
    • Nhược điểm xpath tuyệt đối: phụ thuộc vào thứ tự cha con, path dài

### Xpath tương đối
    • Tìm dựa vào đặc tính
    • Bắt đầu bằng 2 dấu //
    • Tìm xpath theo đặc tính muốn tìm 
VD: //tenthe[@thuoctinh = "gia tri"]
    • Nên dùng xpath tương đối

# Playwright basic syntax

1. Test: là 1 đơn vị cơ bản để khai báo 1 test trong Playwright
2. Step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
Lưu ý: Step nên được map 1-1 với test case manual để dễ dàng maintain

# Playwright basic action

1. Navigation
await page.goto('https://pw-practice.playwrightvn.com/');

2. Click
2.1 Single click
await page.locator("//button").click();
2.2 Double click
await page.locator("//button").dblclick();
2.3 Click chuột phải
page.locator("//button").click({
button: 'right'
})
2.4 Click chuột kèm bấm phím khác
page.locator("").click({
modifiers: ['Shift'],
})

3. Input
Fill
Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

pressSequentially
Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright
Viet Nam', {
delay: 100,
});

4. Radio/checkbox
5. Select option
6. Set Input File

Lấy giá trị hiện tại đang là check hay không:
const isChecked =
page.locator("//input").isChecked();
Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);






