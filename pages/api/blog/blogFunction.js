const axios = require('axios')
const graphql = require('../../../config/graphql')

const blogFunctions = {}

// 모든 엔트리 가져오기
blogFunctions.getEntries = async function (query) {
  let success = false
  try {
    const result = await axios.post(graphql.apiUrl, JSON.stringify({query}), {
      headers: {
        'Authorization': `Bearer ${graphql.token}`
      }
    })
    if (result.status >= 200) success = result.data.data.repository.object.entries
  } catch (err) {
    success = false
    console.log(err)
  }
  return success
}

// 모든 엔트리안의 md파일 불러오기
blogFunctions.getAll = async function (query) {
  let success = false
  try {
    const result = await axios.post(graphql.apiUrl, JSON.stringify({query}), {
      headers: {
        'Authorization': `Bearer ${graphql.token}`
      }
    })
    if (result.status >= 200) {
      const list = result.data.data.repository.object.entries
      const arr = []
      for (const i of list) {
        const post = i.object.entries
        for (const j of post) {
          const obj = {}
          const temp = j.object.text.split('---\n')[1].split('\n')
          obj.name = j.name.split('.md')[0].replace(/[']+/g, '')
          obj.title = temp[0].split('title: ')[1].replace(/[']+/g, '')
          obj.category = temp[1].split('category: ')[1].replace(/[']+/g, '')
          obj.desc = temp[2].split('desc: ')[1].replace(/[']+/g, '')
          obj.date = temp[3].split('date: ')[1].replace(/[']+/g, '')
          obj.thumb = temp[4].split('thumb: ')[1].replace(/[']+/g, '')
          arr.push(obj)
        }
      }
      arr.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1)
      success = {
        posts: arr,
        cate: list,
      }
    }
  } catch (err) {
    success = false
    console.log(err)
  }
  return success
}

// 특정 엔트리 안의 md파일 가져오기
blogFunctions.getPostInCate = async function (query) {
  let success = false
  try {
    const result = await axios.post(graphql.apiUrl, JSON.stringify({query}), {
      headers: {
        'Authorization': `Bearer ${graphql.token}`
      }
    })
    if (result.status >= 200) {
      const list = result.data.data.repository.object.entries
      const arr = []
      for (const j of list) {
        const obj = {}
        const temp = j.object.text.split('---\n')[1].split('\n')
        obj.name = j.name.split('.md')[0].replace(/[']+/g, '')
        obj.title = temp[0].split('title: ')[1].replace(/[']+/g, '')
        obj.category = temp[1].split('category: ')[1].replace(/[']+/g, '')
        obj.desc = temp[2].split('desc: ')[1].replace(/[']+/g, '')
        obj.date = temp[3].split('date: ')[1].replace(/[']+/g, '')
        obj.thumb = temp[4].split('thumb: ')[1].replace(/[']+/g, '')
        arr.push(obj)
      }
      arr.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1)
      success = arr
    }
  } catch (err) {
    success = false
    console.log(err)
  }
  return success
}

// 특정 md파일 불러오기~
blogFunctions.getDetail = async function (query) {
  let success = false
  try {
    const result = await axios.post(graphql.apiUrl, JSON.stringify({query}), {
      headers: {
        'Authorization': `Bearer ${graphql.token}`
      }
    })
    if (result.status >= 200) {
      const text = result.data.data.repository.object.text
      const obj = {}
      const temp = text.split('---\n')[1].split('\n')
      obj.title = temp[0].split('title: ')[1].replace(/[']+/g, '')
      obj.category = temp[1].split('category: ')[1].replace(/[']+/g, '')
      obj.date = temp[3].split('date: ')[1].replace(/[']+/g, '')
      obj.content = text.split('---\n')[2]
      success = obj
    }
  } catch (err) {
    success = false
    console.log(err)
  }
  return success
}

module.exports = blogFunctions