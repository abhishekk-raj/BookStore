import React from "react";
import { IProps } from "./models/book-list.props";

const BookList = (props: IProps) => {
  const styles = {
    color: "white",
    backgroundColor: "grey",
    padding: "0.5rem",
    marginTop: "0.2rem",
  };
  return (
    <div style={styles}>
      {props.index + 1}. {props.book.title}
    </div>
  );
};

export default BookList;
