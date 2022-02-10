import React from "react";
import { IProps } from "./models/book-list.props";
import styles from "./BookList.module.scss";

const BookList = (props: IProps) => {
  return (
    <div className={styles.listItem}>
      {props.index + 1}. {props.book.title}
    </div>
  );
};

export default BookList;
