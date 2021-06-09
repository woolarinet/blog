const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const sql = 'SELECT * FROM category_test'

  const cate = await blogFunctions.getList(sql)

  if (cate !== false) res.status(200).json(cate)
  else res.status(400).end('FAIL')
}
