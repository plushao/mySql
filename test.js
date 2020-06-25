const mysql = require('mysql')
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password:'123456'
})

connection.connect()

connection.query('CREATE DATABASE IF NOT EXISTS fang DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results) {
 if (error) throw error
 console.log('创建数据库')
 console.log(results)
})

connection.end()
