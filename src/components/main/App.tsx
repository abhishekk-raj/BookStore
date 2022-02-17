import React, { useState } from "react";
import "./App.scss";
import BookList from "../book/BookList";
import { IBook } from "../../models/book.props";
import { Header } from "../header/Header";
import logo from "../../assets/images/book-stack.png";
import BookDetail from "../book/BookDetail";
import { bookData } from "../../assets/data/book-data";

function App() {
  const [bookList] = useState<IBook[]>(bookData);
  const [selectedBook, setSelectedBook] = useState<IBook>();

  return (
    <div>
      <Header title="Book Store" logo={logo} />
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
}

export default App;
