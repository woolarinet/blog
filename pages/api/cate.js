const db = require('../../config/db')

export default async function cate(req, res) {
  const sql = 'SELECT * FROM category_test'
  return new Promise(async resolve => {
    db.query(sql, function (err, result) {
      if (err) throw err
      const cate = result
      console.log(cate)
      res.status(200).json(cate)
      return resolve()
    })
  })
}