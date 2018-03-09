const { createApolloFetch } = require('apollo-fetch')

const uri = 'http://localhost:4000/graphql'
const apolloFetch = createApolloFetch({ uri })

apolloFetch.use(({ request, options }, next) => {
  if (!options.headers) options.headers = {}
  options.headers['Authorization'] = 'Bearer jwt-token-from-rest-api' // TODO getTokenFromRequest()
  next()
})

module.exports = apolloFetch
