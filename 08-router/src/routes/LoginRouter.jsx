import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);

  return (
    <Router>
      <AppRouter />
      {/* <Route exact  element={<LoginScreen />} /> */}
      <PublicRouter exact path="/
      " auth={log} element={<LoginScreen />} />
    </Router>
  );
};

export default LoginRouter;
