import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../models/book.props";
import BookApiClassService from "../../services/books-api-class.service";
import BookList from "./BookList";

interface IProps {}
interface IState {
  bookList: IBook[];
}

class BookClass extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      bookList: [],
    };
  }

  componentDidMount() {
    //   Create object of BookApiClassService to acces their public members
    const bacs = new BookApiClassService();
    bacs
      .fetchBooksFromApi()
      .then((books: IBook[]) => {
        this.setState({ bookList: books });
      })
      .catch((error) => {
        console.log(`Error while fetching books data :: ${error}`);
      });
  }

  render(): React.ReactNode {
    return (
      <div>
        <div style={{ margin: "1rem 1rem 1.2rem 0.45rem" }}>
          <Link to="/book/create">Create Book</Link>
        </div>
        <div style={{ height: "calc(100vh - 8rem)", overflow: "auto" }}>
          {this.state.bookList.map((book: IBook, index: number) => {
            return <BookList book={book} key={book.id} index={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default BookClass;
