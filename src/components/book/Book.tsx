import React, { useState } from "react";
import { bookData } from "../../assets/data/book-data";
import { IBook } from "../../models/book.props";
import BookList from "./BookList";

const Book = () => {
  const [bookList] = useState<IBook[]>(bookData);

  return (
    <div>
      {bookList.map((book: IBook, index: number) => {
        return <BookList book={book} key={book.id} index={index} />;
      })}
    </div>
  );
};

export default Book;
