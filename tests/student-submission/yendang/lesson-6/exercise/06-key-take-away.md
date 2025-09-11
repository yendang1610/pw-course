# Git clone 
là lấy dự án có sẵn của vùng Remote về máy tính cá nhân(Local)

Git clone <url>

Url: copy SSH key của Repo

Nếu clone sang tên khác thì dùng command
Git clone <url> <new-name>

# Branch: 
nhánh. Chia branch giúp việc code trở nên thuận tiện hơn

Git branch <branch-name>
Git checkout <branch-name> 
Git checkout -b <branch-name>: Vừa tạo ra 1 branch mới vừa switch sang branch mới đó

# Git push: 
Đưa code từ vùng Repo lên server(Remote)

Git push <remote-name> <branch-name>

Git push origin main

Git remote add<remote-name><ssh-key>

VD: Git remote add origin1<ssh-key>

# Git pull:
lấy dữ liệu về

Pull vs. clone

Clone: lấy cả repo về còn pull chỉ lấy dữ liệu của nhánh đó về máy

Git pull <remote-name><branch-name>

# Git stashing

Stash: lưu các công việc đang làm lại vào 1 vùng nhớ tạm
Unstash: lấy các công việc trong vùng nhớ tạm ra

Git merge request: gộp code từ 1 nhanh sang nhánh còn lại (pull request)

Git reviewer: người reviewer code

# Git convention

Convention: bộ quy tắc giúp code gọn gàng, đồng bộ, dễ đoán được ý đồ của PR/commit
Convention: đặt tên branch: feat/checkout; fix/fill-info; feat/lesson-6

    1. Clone remote repository về máy tính của mình
    2. Đứng ở nhánh main
    3. Git pull origin main
    4. Git checkout -b branch-name (để code cho tính năng mới)
    5. Sau khi code cho tính năng mới xong thì thực hiện pull request: 
        a. Git add .
        b. Git commit -m ""
        c. Git push origin branch-name
    6. Tạo PR và add reviewer
    7. Reviewer review xong => merge code ở branch-name 


# Javascript - Class

Class dùng để khai báo kiểu dữ liệu
Là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà đối tượng thuộc class đó sẽ có

Class để tái sử dụng code và tăng tính linh hoạt cho code
Class dùng PascalCase -> BasePage

VD:

Class Student {

// Thuộc tính chung 
Name: string;
City: string;
//Hàm khởi tạo (luôn luôn có)
This.name = name;
This.city = city;
//Method  (là các hàm gắn với class, thường được dùng để thực hiện các hành động liên quan đến đối tượng của class đó
sayMyName(){
    Console.log(`My name: ${this.name}`);
}
}

Lệnh run typescript
Npx ts-node<path_file>

Lệnh run Javascript
Node <path_file>