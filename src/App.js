import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/Tourlist";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
