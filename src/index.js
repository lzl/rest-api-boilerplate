const { send } = require('micro')
const { router, get } = require('microrouter')

const fetch = require('./fetch')

const query = `
  {
    allPosts {
      id
      text
    }
  }
`

const posts = async (req, res) => {
  const result = await fetch({ query })
  console.log(result)
  return send(res, 200, result)
}

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(get('/posts', posts), get('/*', notfound))
