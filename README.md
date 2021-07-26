# sunhodev
- [sunhodev.com](https://www.sunhodev.com)  

This is my blog website. (*This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)* )

## Environment

### Development Environment
- Visual Studio Code
- Mac OS Catalina

### Deployment Environment
- All things (SSL Certifiaction and Server) are used in Vercel

### Frontend
- React.js (v17.0.2)
- Next.js (v10.2.0)

### Backend
- Node.js (v14.15.1)

### Storage
- A woolarinet/blog_content repository in github. (you can use your own personal repository for contents of blog)

## configuration

### .env
```
GITHUB_TOKEN=your_github_access_token
```
### graphql.js
``` javascript
// /config/grpahql.js

require('dotenv').config()
const query = {
  apiUrl: "github graphql api url"
  token: process.env.GITHUB_TOKEN
}

query.category = "graphql query for getting names of folder in your blog_content repository"

query.allPost = "graphql query for getting all md files in your blog_content repository"

query.post = function (location, name) {
  const result = "graphql query for getting specific md file in your blog_content repository using dynamic root at your web application"
  return result
}

module.exports = query
```
### texts
```sh
├─public
│  │ # ...
│  ├─texts
│  │      about.js
│  │      blog.js
│  │      footer.js
│  │      home.js
│  │      project.js
│  │ # ...
```
##### you can write on these files informations of your contents and import these in each page.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


  &nbsp;  
To use GraphQL API in github, take a look at the following resources:

- [github GraphQL API Docs](https://docs.github.com/en/graphql)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Todo

- [x] ssr problem
- [x] api sync
- [x] layout of dynamic pages (blog, project)
- [x] component page props
- [x] make all pages consist of only components
- [x] insert into _app.js components (header, footer)
- [x] change CKEditor to Toast
- [x] comment
- [x] category mobile version
- [ ] meta & SEO

## Reference

- [junghwayang.com](https://junghwayang.com/) - I totally referred to her blog. Everything in her blog seems to be highly perfected👍