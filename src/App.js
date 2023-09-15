import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
        const fetchedProducts = response.data.products[0].image;
        setImg(fetchedProducts);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching products:", error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get("http://localhost:4000/products");
  //     console.log(data);
  //     setImg(data.data.products[0].image);
  //     console.log(typeof data.data.products[0].image);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <img
        src={`data:image/webp;base64,${img}`}
        className="App-logo"
        alt="logo"
      />
    </div>
  );
}

export default App;
