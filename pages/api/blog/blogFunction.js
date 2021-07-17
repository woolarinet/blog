const axios = require('axios')
const graphql = require('../../../config/graphql')

const blogFunctions = {}

blogFunctions.getList = async function (sql) {
  let result = false
  try {
    const res = await db.query(sql)
    result = res[0]
  } catch (error) {
    result = false
    console.log(error)
  }
  return result
}

blogFunctions.getObj = async function (sql) {
  let result = false
  try {
    const res = await db.query(sql)
    result = res[0][0]
  } catch (error) {
    result = false
    console.log(error)
  }
  return result
}

blogFunctions.setToDB = async function (sql, val) {
  console.log(sql, val)
  let success = false
  try {
    const res = await db.query(sql, val)
    console.log(res)
    success = res[0].insertId
  } catch (error) {
    success = false
    console.log(error)
  }
  return success
}

blogFunctions.delFromDB = async function (sql, val) {
  console.log(sql)
  let success = false
  try {
    const res = await db.query(sql)
    console.log(res)
    success = true
  } catch (error) {
    success = false
    console.log(error)
  }
  return success
}

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