import "./App.css";
import Shop from "./pages/Shop";
import ProductDescription from "./pages/ProductDescription/ProductDescription";
import AnimatedHome from "./pages/HomePage/AnimatedHome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnimatedHome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDescription" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}

export default App;
