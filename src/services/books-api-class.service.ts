import { IBook } from "../models/book.props";

class BookApiClassService {
  public async fetchBooksFromApi(): Promise<IBook[]> {
    const response = await fetch("http://localhost:4000/booksapi").then(
      (res) => {
        return res.json();
      }
    );
    return response;
  }
}

export default BookApiClassService;
