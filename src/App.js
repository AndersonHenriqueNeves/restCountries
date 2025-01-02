import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CountryDetails from "../src/pages/CountryDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

