import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  return (
    <Router>
      <AppRouter />
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
