import React from "react";
import { Filter } from "../common/Filter";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  console.log(products);

  const base64 = "data:image/jpeg;base64,";
  return (
    <div>
      <Navbar />
      <div className="mx-24 my-16">
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
        <div className="flex flex-row justify-between my-8">
          {/* Sort by */}
          <div className="flex flex-row items-center">
            <label className="text-sm font-medium text-gray-700 mr-4">
              Sort by
            </label>
            <select
              className="border-2 rounded-md py-1 w-36"
              name="totalStorage"
            >
              <option value="Select">Select</option>
            </select>
          </div>
          {/* Layout icons */}
          <div></div>
        </div>
        {/* {data && ( */}
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
            <div key={item._id} className="border rounded-md flex flex-col p-4">
              <img src={base64 + item.image} alt={item.model} />
              <span className="text-md mt-4">{item.model}</span>
              <span className="text-2xl font-medium text-orange-600">
                ${item.price}
              </span>
              <div className="flex flex-row mt-4">
                <Link
                  to="/productDescription"
                  type="button"
                  className="flex items-center justify-center border-2 rounded-md border-orange-600 text-orange-600 w-full mr-2 px-4 py-1"
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
    </div>
  );
}
