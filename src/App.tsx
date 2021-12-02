import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { BookDetail, Books, Login } from "./pages";

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    navigate(isAuthenticated ? "/books" : "/");
  }, [navigate, isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Books />}>
        <Route path=":bookId" element={<BookDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
