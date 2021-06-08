const db = require('../../../config/db')

export default async function blog(req, res) {
  const query = JSON.parse(req.query.query)
  const detailId = query.id
  console.log('\n\n\n\n', detailId)
  const sql = `SELECT title, content, date FROM blog_test WHERE id=${detailId}`
  return new Promise(async resolve => {
    db.query(sql, function (err, result) {
      if (err) throw err
      const info = {
        title: result[0].title,
        content: result[0].content,
        date: result[0].date,
      }
      res.status(200).json(info)
      return resolve()
    })
  })
}