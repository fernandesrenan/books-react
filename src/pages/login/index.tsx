import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { signin } from "../../userSlice";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleClick = () => {
    if (login && password) {
      dispatch(signin({ userName: login, isAuthenticated: true }));
    }
  };

  return (
    <div>
      Login
      <input type="text" onChange={(e) => setLogin(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
