import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Header/Navbar'
import HeaderImage from "./Components/Header/HeaderImage";
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeaderImage />
      </BrowserRouter>
    </>
  );
}

export default App;
