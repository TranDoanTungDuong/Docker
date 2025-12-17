# Sử dụng PHP 5.6 với Apache
FROM php:5.6-apache

# Cài đặt MySQL extension
RUN docker-php-ext-install mysql mysqli pdo pdo_mysql

# Copy source code
COPY index.php /var/www/html/

# Expose port 80
EXPOSE 80