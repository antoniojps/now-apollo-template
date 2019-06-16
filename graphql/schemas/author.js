const { gql } = require('apollo-server-micro')

// mock data
const authors = [
  { id: 1, firstName: 'Wole', lastName: 'Soyinka' },
  { id: 2, firstName: 'Tomi', lastName: 'Adeyemi' },
  { id: 3, firstName: 'Chimamanda', lastName: 'Adichie' }
]

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    books: [Book]!
  }

  extend type Query {
    author(id: Int!): Author!
  }

  extend type Mutation {
    addBook(title: String!, rating: Int!, authorId: Int!): Book!
  }
`

let bookId = 5

const resolvers = {
  Query: {
    author: (_, { id }) => authors.find(author => author.id === id)
  },
  Mutation: {
    addBook: (_, { title, rating, authorId }) => {
      bookId++

      const newBook = {
        id: bookId,
        title,
        rating,
        authorId
      }

      books.push(newBook)
      return newBook
    }
  },
  Book: {
    author: book => authors.find(author => author.id === book.authorId)
  }
}

module.exports = {
  typeDefs,
  resolvers
}
