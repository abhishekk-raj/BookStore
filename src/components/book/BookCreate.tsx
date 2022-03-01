import React, { ChangeEvent, useState } from "react";

const BookCreate = () => {
  const [bookName, setBookName] = useState("");

  const onBookNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookName(event.target.value);
  };
  return (
    <div>
      <p style={{ color: "white" }}>{bookName}</p>
      <form>
        <input onChange={onBookNameInputChange} />
      </form>
    </div>
  );
};

export default BookCreate;
