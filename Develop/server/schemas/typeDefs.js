const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
  authors: [String!]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  savedBooks: [Book!]
}

type Auth {
  token: String!
  user: User!
}
 
type Query {
   me: User
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookID: String!, image: String, link: String): User
    removeBook(bookID: String!): User
  }
`;

module.exports = typeDefs;
