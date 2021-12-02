import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export const BookDetail: React.FC = () => {
  const params = useParams();
  const book = useAppSelector((state) =>
    state.books.list.find((book) => book.id === params.bookId)
  );

  return <h3>{book?.title}</h3>;
};
