import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Color from "./components/Color";
import Center from "./components/Center";
import "./components/Style.css"


function App() {
  return (
    <>
      <Navbar/>
      <Color/>
      <Center/>
    </>
  );
}

export default App;
