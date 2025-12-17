# Sử dụng Node.js official image
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Chạy ứng dụng
CMD ["npm", "start"]