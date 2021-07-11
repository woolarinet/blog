const query = require('../../../config/graphql')
const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const result = await blogFunctions.getAll(query.allPost)

  if (result !== false) {
    res.status(200).json({
      entries: result.cate,
      posts: result.posts,
    })
  } else {
    res.status(400).end('FAIL')
  }
}
