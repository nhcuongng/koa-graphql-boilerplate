/**
 * Fake data cho book (gia su lay tu database)
 */
export const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: {
      name: 'J.K. Rowling'
    },
  },
  {
    title: 'Jurassic Park',
    author: {
      name: 'Michael Crichton'
    },
  },
];

/**
 * Fake data cho authors (gia su lay tu database)
 */
export const authors = [
  {
    name: 'J.K. Rowling',
    books: [books[0]],
  },
  {
    name: 'Michael Crichton',
    books: [books[1]],
  },
];