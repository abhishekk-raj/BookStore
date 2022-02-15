import React from "react";
import { IBookDetailProps } from "../../models/book-detail.props";

const BookDetail = (props: IBookDetailProps) => {
  return <div style={{ color: "whitesmoke" }}>{props.book?.title}</div>;
};

export default BookDetail;
