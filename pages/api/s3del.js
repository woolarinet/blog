const aws = require('aws-sdk')
require('dotenv').config()

const s3 = new aws.S3({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_PRIVATE_KEY,
  region: process.env.REGION,
})

const delObj = async function(name){
  let success = false
  try {
    const result = await s3.deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: `jw_blog/${name}`,
    }).promise()
    console.log(result)
    success = true
  } catch (err) {
    success = false
    console.log(err)
  }
  return success
}

module.exports = delObj