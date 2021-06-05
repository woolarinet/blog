const db = require('../../../config/db')

export default async function blog(req, res) {
  let post = []
  let cate = []
  let cnt = 0
  const sql = 'SELECT * FROM blog_test'
  const sql2 =  'SELECT * FROM category_test'
  const sql3 = 'SELECT COUNT(*) FROM blog_test'
  return new Promise(async resolve => {
    db.query(sql, function (err, result) {
      if (err) throw err
      post = result
      console.log(typeof result[4].content)
    })
    db.query(sql2, function (err, result) {
      if (err) throw err
      cate = result
    })
    db.query(sql3, function (err, result) {
      if (err) throw err
      console.log(result[0]['COUNT(*)'])
      cnt = result[0]['COUNT(*)']
      const final = { post, cate, cnt }
      res.status(200).json(final)
      return resolve()
    })
  })
}
