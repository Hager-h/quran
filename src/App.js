import React from "react";

import "./App.css";
import { Usehook } from "./Components/Hook2";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Components/Library/Library";
import Sidebar from "./Components/Sidebar/Sidebar";
import Player from "./Components/Player/Player";
import Rokia from "./Components/Rokia/Rokia";
import Azkar from "./Components/Azkar/Azkar";
import About from "./Components/About/About";
function App() {
  const [data] = Usehook(
    "http://quran-endpoint.vercel.app/quran"
  );

  return (
    <div className="App">
      <div className="special">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Rokia />} />
            <Route path="/القران الكريم" element={<Library />} />
            <Route path="/player" element={<Player data={data} />} />
            <Route path="/azkar" element={<Azkar />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
