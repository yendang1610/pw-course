    #Version control system
    
    Version control system: Hệ thống quản lý phiên bản 
    - Local: máy cá nhân
    - Centralize: lưu ở máy chủ tập trung
    - Distributed: lưu trữ ở nhiều máy khác nhau
    # GIT
    GIT dùng để quản lý phiên bản và làm việc giữa nhiều người với nhau
    
    ##GIT có 3 states
    Working directory (chung), Staging Area (chuẩn bị), Repository (phiên bản)
    • Working directory: chứa các file mới hoặc file có thay đổi
    • Staging area: File đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
    • Repository: Các commit (các phiên bản)

    # GIT commands
    
    • Git init: Khởi tạo thư mục được quản lý bởi Git
    • Git add <file_name>: add 1 file từ working directory sang staging area
    • Git status: Xem trạng thái file. File màu xanh là đã ở vùng staging. File màu đỏ là ở vùng Working directory
    • Git commit -m "<commit message>": đưa file từ stating area lên repository
    • Git log: Kiểm tra lịch sử commit. Commit sau sẽ hiển thị trc 
    • Cấu hình git sau khi khởi tạo: Cấu hình cho 1 repo (đứng tại repo đó)
        ○ Git config user.name "<name>"
        ○ Git config user.email "<email>"
    • Cấu hình git sau khi khởi tạo: Cấu hình cho toàn bộ máy tính (default)
        ○ Git config --global user.name "<user>"
        ○ Git config --global user.email "<email>"
    
    #GIT - commit convention
    
    Convention: <type><Short description>
        ○ Chore: Sửa nhỏ lẻ, xóa file ko dùng tới
        ○ Feat: add new test case/new feature mới
        ○ Fix: fix sửa lỗi 1 test đã có

    #Javascript basic
    
    1. Print 1 đoạn text: console.log("Hello world">);
    
    2. Khai báo biến
    
    Var <ten bien> = <gia tri>;
    Let <ten bien> = <gia tri>;
    
    Var: khai báo cũ
    Let: khai báo mới
    
    Nếu đề bài ko yêu cầu dùng var thì chỉ dùng let vì let dễ kiểm soát phạm vi của biến
    Var khai báo lại được. Let thì ko khai báo lại được.
    
    3. Khai báo biến hằng số
    Const <name> = <value>;
    
    
    4. Data type: có 8 loại kiểu dữ liệu: string, number, bigint, boolean, undefined, null, symbol, object. 
    5. Các toán tử so sánh (Comparison operator): >, < , ==, ===, !=, !==< >=, <=
    6. Toán tử một ngôi: dùng để tăng hoặc giảm giá trị. Ví dụ i++, i--
    7. Toán tử số học (Arithmetic operator): +, -, *, /
    8. Điều kiện
        If (<dieu kien>) {//code};
    VD: if (5>3) { console.log ("5 lon hon 3")};
    9. Vòng lặp: loop
        For (<khoi tao>); <Dieu kien chay>; <Dieu kien tang>) {//code};
    VD:  for (let i = 1; i <= 10; i++) { console.log("Giá trị của i là: ", i);}
    10. Cách format code
    - Mac: Option + Shift + F
    - Window: Alt + Shift + F