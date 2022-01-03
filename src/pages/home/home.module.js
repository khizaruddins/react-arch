import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.component";

function HomeModule() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default HomeModule;
