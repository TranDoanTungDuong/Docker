# Bài tập 2: Docker

## Mô tả
Dự án này bao gồm 2 ứng dụng web đơn giản chạy trong các container Docker riêng biệt:
- Frontend: React application
- Backend: Node.js/Express API

## Cấu trúc dự án
```
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
4. Truy cập: http://localhost:3000

## Các lệnh Docker hữu ích
- Build và chạy: `docker-compose up --build`
- Chạy ở background: `docker-compose up -d`
- Dừng: `docker-compose down`
- Xem logs: `docker-compose logs`