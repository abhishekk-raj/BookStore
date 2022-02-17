import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={props.book.id} state={props.book}>
        View Details
      </Link>
    </div>
  );
};

export default BookList;
