const { gql } = require('apollo-server-micro')
const { typeDefs: Book } = require('./schemas/book')
const { typeDefs: Author } = require('./schemas/author')

const setup = gql`
  # In the current version of GraphQL, you can’t have an empty type
  # even if you intend to extend it later. So we need to make sure the
  # Query type has at least one field in this case we add a fake _empty field
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

const typeDefs = [setup, Book, Author]

module.exports = typeDefs
