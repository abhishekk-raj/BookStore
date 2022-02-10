import React from "react";
import { IProps } from "./models/book-list.props";
import "./BookList.scss";

const BookList = (props: IProps) => {
  return (
    <div className="listItem">
      {props.index + 1}. {props.book.title}
    </div>
  );
};

export default BookList;
