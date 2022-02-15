import React from "react";
import { IProps } from "../../models/book-list.props";
import styles from "./BookList.module.scss";

const BookList = (props: IProps) => {
  return (
    <div className={styles.listItem}>
      <div>
        <h4>{props.book.title}</h4>
        <h6>Author - {props.book.author}</h6>
        <h6>Published - {new Date(props.book.published).toDateString()}</h6>
      </div>
      <button onClick={props.onBookClick}>View Details</button>
    </div>
  );
};

export default BookList;
