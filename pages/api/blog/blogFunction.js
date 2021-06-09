const db = require('../../../config/db')

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
  let success = false
  try {
    const res = await db.query(sql, val)
    console.log(res)
    success = true
  } catch (error) {
    success = false
    console.log(error)
  }
  return success
}

module.exports = blogFunctions