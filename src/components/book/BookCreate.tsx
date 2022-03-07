import React, { ChangeEvent, useState, MouseEvent } from "react";
import styles from "./BookCreate.module.scss";
import { bookData } from "../../assets/data/book-data";
import { useNavigate } from "react-router-dom";

const BookCreate = () => {
  const navigate = useNavigate();
  const [bookFormData, setBookFormData] = useState({
    id: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: 0,
    description: "",
    website: "",
  });

  const onTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    let value;
    if (event.target.name === "pages") {
      value = Number(event.target.value);
    } else {
      value = event.target.value;
    }

    setBookFormData({
      ...bookFormData,
      [event.target.name]: value,
    });
  };

  const onBookCreateButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    bookData.push(bookFormData);
    navigate("/");
  };

  return (
    <div className={styles.BookCreate}>
      <form>
        <div className={styles.FormControl}>
          <label>Book title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book subtitle</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book author</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book published on</label>
          <input
            type="date"
            id="published"
            name="published"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book publisher</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book pages</label>
          <input
            type="number"
            id="pages"
            name="pages"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book description</label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <div className={styles.FormControl}>
          <label>Book website</label>
          <input
            type="text"
            id="website"
            name="website"
            onChange={(e) => onTextChange(e)}
          />
        </div>

        <button onClick={(event) => onBookCreateButtonClick(event)}>
          Create new Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
