const db = require('../../../config/db')

export default async function blog(req, res) {
  console.log(req.body)
  const now = '2021-06-05 19:44:42'
  const sql = 'INSERT INTO blog_test (id, title, content, date) VALUES (?, ?, ?, ?)'
  return new Promise(async resolve => {
    // db.query(sql, [ 8, req.body.title, req.body.content, now ], function (err, result) {
    //   if (err) throw err
    //   console.log(result)
    //   res.status(200).end('OK')
    //   return resolve()
    // })
    console.log(req.body)
    res.status(200).end('OK')
  })
}