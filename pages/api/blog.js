const db = require('../../config/db')

export default async function blog(req, res) {
  let post = []
  let cate = []
  let cnt = 0
  const sql = 'SELECT * FROM blog_test'
  const sql2 =  'SELECT * FROM category_test'
  const sql3 = 'SELECT COUNT(*) FROM blog_test'
  return new Promise(async resolve => {
    db.query(sql, function (err, result) {
      if (err) throw err
      post = result
      console.log(typeof result[4].content)
    })
    db.query(sql2, function (err, result) {
      if (err) throw err
      cate = result
    })
    db.query(sql3, function (err, result) {
      if (err) throw err
      console.log(result[0]['COUNT(*)'])
      cnt = result[0]['COUNT(*)']
      const final = { post, cate, cnt }
      // console.log(final)
      res.status(200).json(final)
      return resolve()
    })
  })


  
  // db.query(sql, function (err, result) {
  //   if (err) throw err
  //   info = result
  // })
  // const example = [
  //   {
  //     id: 1,
  //     title: 'VSCode에서 Draw.io 사용하기',
  //     content: '아래는 Qiita에 개재된 「VS Codeでフローチャートの描きができた」를 번역한 내용입니다. 다소 의역이 있어 어색한 부분이 있어도 양해 부탁드립니다. 하하하하하하하하하하하하하',
  //     date: '2020.06.04',
  //   },
  //   {
  //     id: 2,
  //     title: '폭없는 공백 U+200B (ZWSP: zero width space)',
  //     content: 'Docx파일의 텍스트를 추출하여 DB에 저장하는 로직을 개발하고 있었습니다. JAVA의 POI라이브러리를 활용해 Docx파일을 파싱하였고 정규표현식을 활용하여 ...123123415125125125125',
  //     date: '2020.03.04',
  //   },
  //   {
  //     id: 3,
  //     title: 'Webpack에서 Node 환경변수 접근하기',
  //     content: 'Webpack환경에서 Node의 환경변수에 저장된 프로퍼티에 접근해야 하는 경우가 있습니다. 제가 진행했던 프214124124124124124124124124',
  //     date: '2020.01.04',
  //   },
  //   {
  //     id: 4,
  //     title: 'SpringBoot 토이 프로젝트로 공부한 것들',
  //     content: '1년간 서비스를 했었던 JABIS 웹 애플리케이션을 정리하였습니다. 토이 프로젝트로 진행했던 애플리케이션인 만큼 개발과정이 정말 재미있었고 누군가 사용하는게 참...12312312312312312',
  //     date: '2019.06.04',
  //   },
  //   {
  //     id: 5,
  //     title: 'VScode Sequelize Autocomplete 설정하기',
  //     content: 'Node로 Backend를 구축하다 보면 ORM으로 많이 선택되는 Sequelize 라이브러리가 있습니다. Typescript를 사용하지 않는 경우 Sequel...214124124124124',
  //     date: '2010.06.04',
  //   },
  //   {
  //     id: 6,
  //     title: 'NodeJS 환경 변수 설정',
  //     content: '애플리케이션을 다양한 환경에서 테스트를 하거나 배포를 합니다. DB 커넥션, 외부 API 연동과 같은 정보들은 환경별로 다르기 때문에 매번 변경해줘야 하는 번거. 하하하하하하하하하하하하하',
  //     date: '2007.06.04',
  //   },
  //   {
  //     id: 7,
  //     title: '갑작스럽게 맞이한 Pull Request',
  //     content: '어느 날 Github에서 이메일이 왔습니다. deprecated 된 프로젝트에 대한 보안취약점(Vulnerability) 경고 이메일이라 생각하고 무심하게 내용 하하하하하하하하하하하하하',
  //     date: '2002.06.04',
  //   }
  // ]
  // res.status(200).json(result)
}
