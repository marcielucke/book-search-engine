import { gql } from '@apollo/client';



export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String!], $description: String!, $title: String!, $bookID: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description, title: $title, bookID: $bookID, image: $image, link: $link ) {
    _id
    email
    password
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    
  }
    username
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookID: String!) {
    removeBook(bookID: $bookID) {
    _id
    email
    password
    username
    savedBooks {
        bookId
        authors
        description
        title
        image
        link
      
    }
    }
}
`;




