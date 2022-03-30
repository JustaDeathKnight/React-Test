import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Components/Header";
import About from "../Pages/About";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  // la sintaxis de Routes es la misma que la de Route, pero se pueden agregar varios, aparte de esto Switch fue reemplazado por Routes
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
