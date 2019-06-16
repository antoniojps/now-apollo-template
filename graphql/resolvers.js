const merge = require('lodash.merge')
const { resolvers: BooksResolvers } = require('./schemas/book')
const { resolvers: AuthorResolvers } = require('./schemas/author')

const setupResolvers = {
  Query: {},

  Mutation: {}
}

const resolvers = merge(setupResolvers, AuthorResolvers, BooksResolvers)

module.exports = resolvers
