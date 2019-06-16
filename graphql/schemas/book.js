const { gql } = require('apollo-server-micro')

// mock data
const books = [
  { id: 1, title: 'The Trials of Brother Jero', rating: 8, authorId: 1 },
  { id: 2, title: 'Half of a Yellow Sun', rating: 9, authorId: 3 },
  { id: 3, title: 'Americanah', rating: 9, authorId: 3 },
  { id: 4, title: 'King Baabu', rating: 9, authorId: 1 },
  { id: 5, title: 'Children of Blood and Bone', rating: 8, authorId: 2 }
]

const typeDefs = gql`
  type Book {
    id: Int!
    title: String!
    rating: Int!
    author: Author!
  }

  extend type Query {
    books: [Book!]!
    book(id: Int!): Book!
  }
`

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id)
  },
  Author: {
    books: author => books.filter(book => book.authorId === author.id)
  }
}

module.exports = {
  typeDefs,
  resolvers
}
