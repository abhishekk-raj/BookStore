import React from "react";
import "./App.scss";
import { Header } from "../header/Header";
import logo from "../../assets/images/book-stack.png";
import Book from "../book/Book";

function App() {
  return (
    <div>
      <Header title="Book Store" logo={logo} />
      <Book />
    </div>
  );
}

export default App;
