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
}