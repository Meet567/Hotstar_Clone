import React from "react";
import { Route, Routes } from "react-router-dom";

import HotstarApp from "./HotstarApp";
import Home from "./Home";
import Tv from "./Tv";
import Movies from "./Movies";
import Sports from "./Sports";
import Categories from "./Categories";

function HotstarNavbar() {
  return (
    <div>
      <HotstarApp />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default HotstarNavbar;
