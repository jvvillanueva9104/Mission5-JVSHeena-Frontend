import React from "react";
import Navbar from "../../common/Navbar";
import TopContent from "./components/TopContent";
import Footer from "../../common/Footer";
import TabbedSection from "./components/TabbedSection";
import SuggestionContents from "./components/SuggestionContents";
import { useState, useEffect } from "react";
import StickyNavbar from "../../common/StickyNavbar";
import { motion } from "framer-motion";

const ProductDescription = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const origNavbar = document.querySelector(".orig-navbar");
      const scrollThreshold = origNavbar.offsetTop + origNavbar.offsetHeight;

      if (window.scrollY > scrollThreshold) {
        setShowStickyNavbar(true);
      } else {
        setShowStickyNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Navbar />
      {showStickyNavbar && <StickyNavbar />}
      <TopContent />
      <TabbedSection />
      <SuggestionContents />
      <Footer />
    </motion.div>
  );
};

export default ProductDescription;
