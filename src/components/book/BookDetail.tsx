import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IBookDetailProps } from "../../models/book-detail.props";
import { IBook } from "../../models/book.props";

const BookDetail = (props: IBookDetailProps) => {
  const location = useLocation();
  const [book] = useState<IBook>(location.state as IBook);
  return (
    <div style={{ color: "whitesmoke" }}>
      <div>Book Details</div>
      <div>Book name :: {book.title}</div>
      <div>Book author :: {book.author}</div>
      <div>Book subtitle :: {book.subtitle}</div>
    </div>
  );
};

export default BookDetail;
