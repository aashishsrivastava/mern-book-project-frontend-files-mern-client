import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/all-books")
    fetch("https://mern-book-projects-backend-file.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(4, 8)));
  }, []);

  return (
    <>
      <div>
        <BookCards books={books} headline="Other Books" />
      </div>
    </>
  );
};

export default OtherBooks;
