const query = require('../../../config/graphql')
const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const result = await blogFunctions.getAll(query.allPost)
  console.log(result.posts.length)
  console.log(result.cate[0].object.entries.length)

  if (result === false) {
    res.status(400).end('FAIL')
    return;
  }
  // 작성중 (쿠키에 카테고리 별 글 개수 추가)
  // if (req.cookie === undefined || !req.cookie) {
  //   const AllPosts = result.posts.length
    
  //   res.status(200).cookie('number-of-posts', )
  // }
  res.status(200).json({
    entries: result.cate,
    posts: result.posts,
    all: result.posts.length,
  })
}
