// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../config/db')

export default (req, res) => {
  // const sql = 'CREATE TABLE IF NOT EXISTS `student_tb4` (`sno` int(11) NOT NULL, `name` char(10) DEFAULT NULL, `det` char(20) DEFAULT NULL, `addr` char(80) DEFAULT NULL, `tel` char(20) DEFAULT NULL, PRIMARY KEY (`sno`)) ENGINE=InnoDB DEFAULT CHARSET=utf8'
  // const sql2 = 'INSERT INTO student_tb4(sno, name) VALUES(1, "이순신")'
  const sql3 = 'SELECT * FROM student_tb4'
  return new Promise(async resolve => {
    db.query(sql3, function (err, result) {
      if (err) throw err
      console.log("Table altered")
      res.status(200).json(result[0].name)
      return resolve()
    })
  })
}
