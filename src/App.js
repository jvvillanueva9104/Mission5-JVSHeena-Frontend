import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

function App() {
  const [img, setImg] = useState("");

  useEffect(() => {
    // Define the URL of your backend API
    const apiUrl = "http://localhost:4000/products"; // Replace with your actual API endpoint

    // Make a GET request to retrieve products with Base64-encoded images
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        const fetchedProducts = response.data.products;
        setImg(fetchedProducts);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
