const blogFunctions = require('./blogFunction')
const delObj = require('../s3del')

export default async (req, res) => {
  const { query } = req

  // url
  const url = `SELECT url FROM T_IMG_JW WHERE fk_blog=${query.id}`
  const urlReq = await blogFunctions.getList(url)

  console.log(urlReq)
  
  for (const i of urlReq) {
    const key = i.url.split('jw_blog/')[1]
    console.log(key, 'key')
    await delObj(key)
  }

  // 참조 데이터 먼저 삭제 후 삭제하기
  const fk_id = `DELETE FROM T_IMG_JW WHERE fk_blog=${query.id}`
  const res_fk = await blogFunctions.getObj(fk_id)

  const sql = `DELETE FROM blog_test WHERE id=${query.id}`
  const result = await blogFunctions.getObj(sql)
  if (result !== false && res_fk !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}