import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { addBook } from "../../booksSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Books: React.FC = () => {
  const navigate = useNavigate();
  const books = useAppSelector((state) => state.books.list);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleClick = () => {
    if (title && author) {
      dispatch(addBook({ title, author }));

      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <hr />
      {books.map((book) => (
        <div
          style={{ border: "1px solid black", cursor: "pointer" }}
          onClick={() => navigate(`/books/${book.id}`)}
        >
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
      <Outlet />
    </div>
  );
};
