import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../models/book.props";
import fetchBooksFromApi from "../../services/book-api-function.service";
import BookList from "./BookList";

const Book = () => {
  const [bookList, setBookList] = useState<IBook[]>([]);

  useEffect(() => {
    fetchBooksFromApi()
      .then((books: IBook[]) => {
        setBookList(books);
      })
      .catch((error) => {
        console.log(`Error while fetching books data :: ${error}`);
      });
  }, []);

  return (
    <div>
      <div style={{ margin: "1rem 1rem 1.2rem 0.45rem" }}>
        <Link to="/book/create">Create Book</Link>
      </div>
      <div style={{ height: "calc(100vh - 8rem)", overflow: "auto" }}>
        {bookList.map((book: IBook, index: number) => {
          return <BookList book={book} key={book.id} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Book;
