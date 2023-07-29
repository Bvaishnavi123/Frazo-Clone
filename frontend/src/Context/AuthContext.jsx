import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, settoken] = useState("");
  const [user, setUser] = useState("");

  const loginAuth = (data) => {
    settoken(data);
  };
  // console.log("token", token);
  // console.log("user", user);

  const logoutAuth = () => {
    settoken("");
  };

  const handelUser = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider
      value={{ loginAuth, logoutAuth, handelUser, token, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
