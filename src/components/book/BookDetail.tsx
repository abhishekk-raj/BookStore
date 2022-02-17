import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IBookDetailProps } from "../../models/book-detail.props";
import { IBook } from "../../models/book.props";
import styles from "./BookDetail.module.scss";

const BookDetail = (props: IBookDetailProps) => {
  const location = useLocation();
  const [book] = useState<IBook>(location.state as IBook);
  return (
    <div className={styles.Book}>
      <div className={styles.card}>
        <h2>Book Details</h2>

        <table>
          <tbody>
            <tr>
              <td className={styles.tableDataTitle}>Title</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td className={styles.tableDataTitle}>Subtitle</td>
              <td>{book.subtitle}</td>
            </tr>
            <tr>
              <td className={styles.tableDataTitle}>Author</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <td className={styles.tableDataTitle}>Pages</td>
              <td>{book.pages}</td>
            </tr>
            <tr>
              <td className={styles.tableDataTitle}>Description</td>
              <td>{book.description}</td>
            </tr>
            <tr>
              <td className={styles.tableDataTitle}>Website</td>
              <td>{book.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetail;
