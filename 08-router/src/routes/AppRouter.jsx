import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";
import MenScreen from "../pages/MenScreen";
import SearchScreen from "../pages/SearchScreen";
import WomanScreen from "../pages/WomanScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/mens" element={<MenScreen />} />
        <Route exact path="/womans" element={<WomanScreen />} />
        <Route exact path="/search" element={<SearchScreen />} />
        <Route path="/character/:id" element={<CharacterScreen />} />
        {/* <Route path="*" element={<div>404</div>} />{" "} */}
      </Routes>
    </>
  );
};

export default AppRouter;
