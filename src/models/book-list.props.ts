import { MouseEvent } from "react";
import { IBook } from "./book.props";

export interface IProps {
  book: IBook;
  index: number;
  onBookClick: (event: MouseEvent<HTMLElement>) => void;
}
