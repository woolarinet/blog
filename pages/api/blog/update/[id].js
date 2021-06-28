const blogFunctions = require('../blogFunction')

export default async function blog(req, res) {
  const query = req.query
  const sql = `SELECT * FROM blog_test WHERE id=${query.id}`
  const sql_cate = 'SELECT * FROM category_test'
  // const sql_cnt = 'SELECT COUNT(*) FROM blog_test'

  const result = await blogFunctions.getObj(sql)
  const cate = await blogFunctions.getList(sql_cate)
  // const count = await blogFunctions.getList(sql_cnt)

  if (result !== false) {
    res.status(200).json({
      id: result.id,
      title: result.title,
      desc: result.desc,
      content: result.content,
      date: result.date,
      // cnt: count[0]['COUNT(*)'],
      cate,
    })
  } else {
    res.status(400).end('FAIL')
  }
}