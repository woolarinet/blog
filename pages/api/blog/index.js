const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const sql_post = 'SELECT * FROM blog_test'
  const sql_cate =  'SELECT * FROM category_test'
  const sql_cnt = 'SELECT COUNT(*) FROM blog_test'

  const cate = await blogFunctions.getList(sql_cate)
  const post = await blogFunctions.getList(sql_post)
  const count = await blogFunctions.getList(sql_cnt)

  if (cate !== false && post !== false && count !== false) {
    res.status(200).json({
      cate,
      post,
      cnt: count[0]['COUNT(*)'],
    })
  } else {
    res.status(400).end('FAIL')
  }
}
