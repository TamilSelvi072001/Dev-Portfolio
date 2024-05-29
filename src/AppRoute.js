import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import Contact from "./ContactPage/Contact";

function AppRoute() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<FirstPage />} />
        <Route path="details" element={<SecondPage />} />
        <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
