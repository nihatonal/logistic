import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Main from "./Main/Main";
// import Home from "./Home/page/Home";
import Footer from "./shared/Footer/Footer";
import { LanguageProvider } from "./shared/context/Language";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
