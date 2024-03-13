import { Route, Routes } from "react-router-dom";
import "./App.css";

import HotstarApp from "./Hotstar/HotstarApp";

import Home from "./Hotstar/Home";
import Tv from "./Hotstar/Tv";
import Movies from "./Hotstar/Movies";
import Sports from "./Hotstar/Sports";
import Categories from "./Hotstar/Categories";
import LoginPage from "./Hotstar/LoginPage";

function App() {
  return (
    <div className="App">
      <HotstarApp />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
