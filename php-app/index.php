<?php
// Kiểm tra kết nối MySQL
$host = 'mysql';
$port = 3306;
$user = 'root';
$pass = 'root123';

// Thử kết nối
$t = @mysql_connect("$host:$port", $user, $pass);

if(!$t) {
    echo '<h1 style="color: red;">Lỗi kết nối MySQL</h1>';
    echo '<p>Lỗi: ' . mysql_error() . '</p>';
    echo '<p>Đảm bảo MySQL container đang chạy</p>';
} else {
    echo '<h1 style="color: green;">Kết nối MySQL thành công!</h1>';
    echo '<p>PHP 5.6 + MySQL 5 đang hoạt động</p>';
    mysql_close($t);
}

echo '<hr>';
echo '<h2>Thông tin PHP:</h2>';
echo '<p>PHP Version: ' . phpversion() . '</p>';
echo '<p>Server: ' . $_SERVER['SERVER_SOFTWARE'] . '</p>';
?>