const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  console.log(req.body)
  const now = '2021-06-05 19:44:42'
  const sql = 'INSERT INTO blog_test (id, title, content, date) VALUES (?, ?, ?, ?)'

  const val = [ 11, req.body.title, req.body.content, now ]

  const result = await blogFunctions.setToDB(sql, val)
  if (result !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}