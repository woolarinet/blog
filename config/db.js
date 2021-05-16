const mysql = require('mysql')

const db = mysql.createPool({
  host: "pkk-blogs.cuwex8kz3bin.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  database: "pkk_blog",
  user: "admin",
  password: "pkkjhg12!",
})

module.exports = db