import React from "react";
import { Filter } from "../common/Filter";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(filteredProducts);

  const base64 = "data:image/jpeg;base64,";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="mx-24 my-16">
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
        <div className="my-8">
          {/* Sort by */}
          <div className="flex flex-row items-center">
            <label className="text-[#000000] roboto-font-14 mr-4 ">
              Sort by
            </label>
            <select
              className="justify-center rounded-md px-10 py-2 text-sm roboto-font-14 text-[#505050] shadow-sm ring-1 ring-inset ring-gray-300"
              name="totalStorage"
            >
              <option value="Select">Select</option>
            </select>
            <div className="flex-grow"></div>
            <img
              src="/view-buttons.png"
              alt="View Buttons"
              className="w-20 h-11 mr-22 p-2 cursor-pointer"
            />
          </div>
          {/* Layout icons */}
        </div>
        {/* {data && ( */}
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
            <div
              key={item._id}
              className="relative border rounded-md flex flex-col p-4"
            >
              <img src={base64 + item.image} alt={item.model} />
              <img
                src="/like-button.png"
                alt="Like Button"
                className="absolute left-[80%]"
                style={{ borderRadius: "50%" }}
              />
              <span className="roboto-font-18 mt-4">{item.model}</span>
              <span className="font-medium text-[#E1843C] text-2xl">
                ${item.price}
              </span>
              <div className="flex flex-row mt-4">
                <Link
                  to="/productDescription"
                  type="button"
                  className="flex items-center justify-center border-2 rounded-md border-[#E1843C] text-[#E1843C] w-full mr-2 px-4 py-1"
                >
                  View details
                </Link>
                <button
                  type="button"
                  className="rounded-md bg-[#E1843C] text-white w-full px-4 py-1"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
      <Footer />
    </motion.div>
  );
}
