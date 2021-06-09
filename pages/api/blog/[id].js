const blogFunctions = require('./blogFunction')

export default async function blog(req, res) {
  const query = req.query
  const sql = `SELECT title, content, date FROM blog_test WHERE id=${query.id}`

  const result = await blogFunctions.getObj(sql)

  if (result !== false) {
    res.status(200).json({
      title: result.title,
      content: result.content,
      date: result.date,
    })
  } else {
    res.status(400).end('FAIL')
  }
}