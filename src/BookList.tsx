import React from "react";

interface IBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

interface IProps {
  book: IBook;
  index: number;
}

const BookList = (props: IProps) => {
  return (
    <div>
      {props.index + 1}. {props.book.title}
    </div>
  );
};

export default BookList;
