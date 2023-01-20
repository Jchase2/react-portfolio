import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
