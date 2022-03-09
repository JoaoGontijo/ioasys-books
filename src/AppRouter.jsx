import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import { UserContext } from "./context/UserContext";
import {
  bookDetailsInitial,
  userInitialState,
} from "./common/helpers/initialStates";

const Rotas = () => {

  const [userDetails, setUserDetails] = useState(userInitialState);
  const [bookDetails, setBookDetails] = useState(bookDetailsInitial);

  useEffect(() => {
    const getUserSession = async () => {
      const loggedInUser = sessionStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        await setUserDetails(foundUser);
      }
    }
    getUserSession()
  }, []);

  return (
    <Router>
      <UserContext.Provider
        value={{ userDetails, bookDetails, setUserDetails, setBookDetails }}
      >
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default Rotas;
