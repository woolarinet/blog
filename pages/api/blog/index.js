export default function blog(req, res) {
  const hello = [
    {
      id: 1,
      name: 'geuntae',
    },
    {
      id: 2,
      name: 'hanju',
    },
    {
      id: 3,
      name: 'jungwoo',
    },
  ]
  res.status(200).json(hello)
}