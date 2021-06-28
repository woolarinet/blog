const s3 = require('../../config/s3')
const nextConnect = require('next-connect')

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})

apiRoute.use(s3.default.array('img'))

apiRoute.post((req, res) => {
  const info = {
    url: req.files[0].location,
    name: req.files[0].originalname,
  }
  console.log(info)
  res.status(200).json(info)
})

export const config = {
  api: {
    bodyParser: false,
  }
}

export default apiRoute