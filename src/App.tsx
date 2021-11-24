import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Books, Login } from "./pages";

const isAuthenticated = false;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isAuthenticated ? "/books" : "/");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
