const blogFunctions = require('./blogFunction')
const query = require('../../../config/graphql')

export default async function blog(req, res) {
  const router = req.query
  console.log(router)
  const cate = await blogFunctions.getEntries(query.category)
  const info = await blogFunctions.getDetail(query.post(router.cate, router.id))
  console.log('info: ', info)
  if (info !== false) {
    res.status(200).json({
      cate: cate,
      detail: info,
    })
  }
  // const sql = `SELECT id, title, content, date FROM blog_test WHERE id=${query.id}`
  // const sql_cate = 'SELECT * FROM category_test'
  // const sql_cnt = 'SELECT COUNT(*) FROM blog_test'
  

  // const cate = await blogFunctions.getObj(sql)
  // const cate = await blogFunctions.getList(sql_cate)
  // const count = await blogFunctions.getList(sql_cnt)
  

  // if (cate !== false) {
  //   res.status(200).json({
  //     id: cate.id,
  //     title: cate.title,
  //     content: cate.content,
  //     date: cate.date,
  //     cnt: count[0]['COUNT(*)'],
      
  //     cate,
  //   })
  // } else {
  //   res.status(400).end('FAIL')
  // }
}