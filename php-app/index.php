<?php
$t = mysql_connect('mysql:3306', 'root', 'root123');

if(!$t) {
    echo 'lỗi';
} else {
    echo 'ok';
}

mysql_close($t);
?>