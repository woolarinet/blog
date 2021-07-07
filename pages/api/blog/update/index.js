const delObj = require('../../s3del')
const blogFunctions = require('../blogFunction')

export default async (req, res) => {
  // console.log(req.body)
  const query = req.query
  const body = req.body
  const imgList = body.imgList
  const delList = []
  const imgVal = []
  const insertList = []

  // 삭제한 사진 경로 추출
  for (const i of imgList) {
    if (body.content.indexOf(i.url) === -1) {
      delList.push(i.url)
      console.log(delList, 'del')
      // imgList.splice(imgList.indexOf(i), 1)
    } else {
      insertList.push({url: i.url, index: body.content.indexOf(i.url)})
    }
  }

  insertList.sort((a, b) => a.index - b.index)
  
  // 삽입 취소 사진 s3에서 삭제
  if (delList.length) {
    for (const i of delList) {
      const key = i.split('jw_blog/')[1]
      await delObj(key)
    }
    // 테이블에서도 삭제
    const sql_delImg = `DELETE FROM T_IMG_JW WHERE fk_blog = ${query.id}`
    await blogFunctions.delFromDB(sql_delImg, null)
  }

  // 블로그 테이블 수정
  let sql = ''
  let val = []
  if (insertList.length) {
    sql = 'UPDATE `blog_test` SET `title` = ?, `content` = ?, `desc` = ?, `thumb` = ? WHERE `id` = ?'
    val = [body.title, body.content, body.desc, insertList[0].url, parseInt(query.id)]
    // 이미지 테이블도 수정
    for (const i of insertList) {
      imgVal.push([i.url, query.id])
    }
    const sql_img = 'INSERT INTO `T_IMG_JW` (`url`, `fk_blog`) VALUES ?;'
    await blogFunctions.setToDB(sql_img, [imgVal])
  } else {
    sql = 'UPDATE `blog_test` SET `title` = ?, `content` = ?, `desc` = ?, `thumb` = ? WHERE `id` = ?'
    val = [body.title, body.content, body.desc, '/images/default_blog.png', parseInt(query.id)]
  }

  const result = await blogFunctions.setToDB(sql, val)
  if (result !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}