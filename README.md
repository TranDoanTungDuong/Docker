# Bài tập 2: Docker

## Mô tả
Dự án này bao gồm nhiều ứng dụng web chạy trong các container Docker riêng biệt:
- PHP 5.6 + MySQL 5: Ứng dụng PHP kết nối database
- Frontend: React application
- Backend: Node.js/Express API

## Cấu trúc dự án
```
├── php-app/           # PHP 5.6 application
├── frontend/          # React application
├── backend/           # Node.js API
├── docker-compose.yml # Docker compose configuration
└── README.md
```

## Demo trực tuyến
🌐 **GitHub Pages**: https://trandoantungduong.github.io/Docker

## Cách chạy local với Docker
1. Cài đặt Docker và Docker Compose
2. Clone repository
3. Chạy: `docker-compose up --build`
4. Truy cập các ứng dụng:
   - PHP App: http://localhost:8080
   - Frontend React: http://localhost:3000
   - Backend API: http://localhost:5000
   - MySQL: localhost:3309

## Các lệnh Docker hữu ích
- Build và chạy: `docker-compose up --build`
- Chạy ở background: `docker-compose up -d`
- Dừng: `docker-compose down`
- Xem logs: `docker-compose logs`