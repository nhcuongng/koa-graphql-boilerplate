import { books, authors } from '../data';

/**
 * ```Resolvers```
 * Khi chung ta ```Query``` den thi resolvers se dong vai trong goi den data ma client goi den
 * 
 * @example
 * ```js
 * query GetBooksAndAuthors {
      books { // tuong ung voi resolver books
        title
      }

      authors { // tuong ung voi resolver authors
        name
      }
    }
 * ```
 */
export const resolvers = {
  Query: { 
    books: () => books,
    authors: () => authors,
  },
};