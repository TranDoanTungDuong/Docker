# Hướng dẫn chạy Bài tập 2 - Docker

## Yêu cầu hệ thống
- Docker Desktop đã được cài đặt
- Git (để clone repository)

## Cách chạy dự án

### 1. Chuẩn bị
```bash
# Clone repository (nếu có)
git clone <repository-url>
cd docker-exercise

# Hoặc tạo thư mục mới và copy các file
```

### 2. Chạy với Docker Compose
```bash
# Build và chạy tất cả services
docker-compose up --build

# Hoặc chạy ở background
docker-compose up --build -d
```

### 3. Truy cập ứng dụng
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### 4. Kiểm tra API endpoints
- Health check: http://localhost:5000/api/health
- Users list: http://localhost:5000/api/users
- Root: http://localhost:5000/

## Các lệnh Docker hữu ích

### Quản lý containers
```bash
# Xem containers đang chạy
docker ps

# Xem logs
docker-compose logs
docker-compose logs frontend
docker-compose logs backend

# Dừng containers
docker-compose down

# Dừng và xóa volumes
docker-compose down -v
```

### Development
```bash
# Rebuild một service cụ thể
docker-compose build frontend
docker-compose build backend

# Chạy lại sau khi thay đổi code
docker-compose up --build

# Vào container để debug
docker exec -it frontend-react sh
docker exec -it backend-api sh
```

### Cleanup
```bash
# Xóa containers và images
docker-compose down --rmi all

# Xóa tất cả (bao gồm volumes)
docker-compose down --rmi all --volumes

# Xóa tất cả Docker data (cẩn thận!)
docker system prune -a
```

## Cấu trúc dự án
```
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── .dockerignore
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── .dockerignore
├── docker-compose.yml
├── scripts.bat
└── README.md
```

## Troubleshooting

### Port đã được sử dụng
```bash
# Kiểm tra port đang được sử dụng
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Thay đổi port trong docker-compose.yml nếu cần
```

### Container không start
```bash
# Xem logs chi tiết
docker-compose logs [service-name]

# Kiểm tra Docker daemon
docker version
```

### Rebuild từ đầu
```bash
# Xóa tất cả và build lại
docker-compose down --rmi all
docker-compose up --build
```

## Tính năng chính
1. **Backend API**: Node.js/Express server với các endpoints cơ bản
2. **Frontend**: React app giao tiếp với backend
3. **Docker Compose**: Orchestration cho cả hai services
4. **Health Checks**: Monitoring container health
5. **Multi-stage Build**: Tối ưu hóa image size cho production

## Mở rộng
- Thêm database (MySQL, PostgreSQL)
- Thêm Redis cho caching
- Thêm Nginx làm reverse proxy
- Thêm monitoring với Prometheus/Grafana