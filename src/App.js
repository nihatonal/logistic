import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
// import Home from "./Home/page/Home";
// import Footer from "./shared/Footer/page/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      {/*<Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
