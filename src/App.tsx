import React from "react";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/Winners" element={<Winners />} />
    </Routes>
  );
}

export default App;
