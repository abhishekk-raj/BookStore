import React, { useState } from "react";
import { bookData } from "../../assets/data/book-data";
import { IBook } from "../../models/book.props";
import BookDetail from "./BookDetail";
import BookList from "./BookList";

const Book = () => {
  const [bookList] = useState<IBook[]>(bookData);
  const [selectedBook, setSelectedBook] = useState<IBook>();

  return (
    <div>
      {bookList.map((book: IBook, index: number) => {
        return (
          <BookList
            book={book}
            key={book.id}
            index={index}
            onBookClick={() => setSelectedBook(book)}
          />
        );
      })}
      <BookDetail book={selectedBook} />
    </div>
  );
};

export default Book;
