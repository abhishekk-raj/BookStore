import React from "react";
import "./App.scss";
import { Header } from "../header/Header";
import logo from "../../assets/images/book-stack.png";
import Book from "../book/Book";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookDetail from "../book/BookDetail";

function App() {
  return (
    <div>
      <Header title="Book Store" logo={logo} />

      <BrowserRouter>
        <Routes>
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/" element={<Navigate replace to="/book" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
