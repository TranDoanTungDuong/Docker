# Hướng dẫn chạy PHP 5.6 + MySQL 5

## Vấn đề hiện tại
Docker không thể pull images do lỗi kết nối mạng.

## Cách khắc phục

### Bước 1: Kiểm tra Docker
```bash
docker --version
docker ps
```

### Bước 2: Restart Docker Desktop
- Mở Docker Desktop
- Click biểu tượng Settings (bánh răng)
- Chọn "Restart"

### Bước 3: Thử pull images thủ công
```bash
# Pull PHP image
docker pull php:5.6-apache

# Pull MySQL/MariaDB image  
docker pull mariadb:5.5
```

### Bước 4: Chạy docker-compose
```bash
# Chạy tất cả services
docker-compose up --build

# Hoặc chỉ chạy PHP (không cần MySQL)
docker-compose -f docker-compose-simple.yml up --build
```

## Sau khi chạy thành công

### Truy cập các ứng dụng:
- **PHP App**: http://localhost:8080
  - Sẽ hiển thị "ok" nếu kết nối MySQL thành công
  - Hoặc "lỗi" nếu không kết nối được

- **MySQL**: localhost:3309
  - User: root
  - Password: root123
  - Database: testdb

- **Frontend React**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Test kết nối MySQL
```bash
# Vào container MySQL
docker exec -it mysql-db mysql -uroot -proot123

# Hoặc từ máy local
mysql -h 127.0.0.1 -P 3309 -uroot -proot123
```

## Troubleshooting

### Lỗi "failed to copy: httpReadSeeker"
- Đây là lỗi kết nối Docker Hub
- Kiểm tra internet
- Thử đổi DNS sang 8.8.8.8
- Restart Docker Desktop
- Thử lại sau vài phút

### Port đã được sử dụng
```bash
# Kiểm tra port
netstat -ano | findstr :8080
netstat -ano | findstr :3309

# Đổi port trong docker-compose.yml nếu cần
```

### Container không start
```bash
# Xem logs
docker-compose logs php-app
docker-compose logs mysql

# Xóa và build lại
docker-compose down
docker-compose up --build
```