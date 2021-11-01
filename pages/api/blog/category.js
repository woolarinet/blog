const query = require('../../../config/graphql')
const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const cate = await blogFunctions.getAll(query.allPost)
  console.log('cate', cate)
  const result = await blogFunctions.getPostInCate(query.postsInCate(req.query.cate))
  if (result !== false) {
    res.status(200).json({
      entries: cate.cate,
      posts: result,
    })
  } else {
    res.status(400).end('FAIL')
  }
}
