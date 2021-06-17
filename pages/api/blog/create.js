const moment = require('moment')
const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  // console.log(req.body)
  const body = req.body
  const now = moment().format('YYYY-MM-DD HH:mm:ss')
  // console.log(now)
  const sql = 'INSERT INTO blog_test (`title`, `desc`, `content`, `date`) VALUES (?, ?, ?, ?)'

  const val = [body.title, body.desc, body.content, now]

  const result = await blogFunctions.setToDB(sql, val)
  if (result !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}