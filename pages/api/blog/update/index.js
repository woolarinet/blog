const moment = require('moment')
const blogFunctions = require('../blogFunction')

export default async (req, res) => {
  // console.log(req.body)
  const query = req.query
  const body = req.body
  console.log('query: ', query)
  console.log('body: ', body)
  // const now = moment().format('YYYY-MM-DD HH:mm:ss')

  const sql = 'UPDATE `blog_test` SET `title` = ?, `content` = ?, `desc` = ? WHERE `id` = ?'
  const val = [body.title, body.content, body.desc, parseInt(query.id)]
  // console.log(now)

  const result = await blogFunctions.setToDB(sql, val)
  if (result !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}