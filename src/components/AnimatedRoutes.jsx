import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDescription from "../pages/ProductDescription/ProductDescription";
import AnimatedHome from "../pages/HomePage/AnimatedHome";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedHome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDescription" element={<ProductDescription />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
