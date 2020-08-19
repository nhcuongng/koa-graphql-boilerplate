import { gql } from 'apollo-server-koa';

/**
 * Schema nay dinh nghi hai ```object type``` la ```Books``` va ```Author```
 */
export const rootSchema = gql`
  # Book bao gom title (string) va author (Author, kieu du lieu nay tham chieu toi object type Author ben duoi) 
  type Book {
    title: String
    author: Author
  }

  # Author bao gom name va books (tra ve mang data voi object type la Book o tren)
  type Author {
    name: String
    books: [Book]
  }

  # "Query" type la kieu query dac biet, no se map voi resolver ma ta dinh nghia trong ../resolvers/index
  # No query toan bo du lieu ma client co the yeu cau
  # trong truong hop nay no se tra ve mang books va mang authors tuong ung, trong truong hop ko tim thay no tra mang rong
  type Query {
    books: [Book]
    authors: [Author]
  }
`