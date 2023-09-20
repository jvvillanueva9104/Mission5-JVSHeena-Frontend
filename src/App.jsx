import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Shop from "./pages/Shop";
import ProductDescription from "./pages/ProductDescription/ProductDescription";

function App() {
  return (
    <div className="App">
      <ProductDescription />
    </div>
  );
}

export default App;
