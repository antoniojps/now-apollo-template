const { ApolloServer, gql } = require('apollo-server-micro')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const middleware = require('./services/middlewares')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

const apolloHandler = server.createHandler()

// https://github.com/apollographql/apollo-server/issues/2473
module.exports = middleware(
  (req, res) => req.method === 'OPTIONS'
    ? res.end()
    : apolloHandler(req, res)
)