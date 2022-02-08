import React from "react";
import { IProps } from "./models/book-list.props";

const BookList = (props: IProps) => {
  return (
    <div>
      {props.index + 1}. {props.book.title}
    </div>
  );
};

export default BookList;
