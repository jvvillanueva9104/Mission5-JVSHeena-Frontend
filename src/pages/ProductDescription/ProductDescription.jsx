import React from "react";
import Navbar from "../../common/Navbar";
import TopContent from "./components/TopContent";
import Footer from "../../common/Footer";
import TabbedSection from "./components/TabbedSection";
import SuggestionContents from "./components/SuggestionContents";

const ProductDescription = () => {
  return (
    <div>
      <Navbar />
      <TopContent />
      <TabbedSection />
      <SuggestionContents />
      <Footer />
    </div>
  );
};

export default ProductDescription;
