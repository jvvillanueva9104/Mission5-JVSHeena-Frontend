import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import Shop from './pages/Shop';

function App() {
  const [img, setImg] = useState('');

  useEffect(() => {
    // Define the URL of your backend API
    const apiUrl = 'http://localhost:4000/products'; // Replace with your actual API endpoint

    // Make a GET request to retrieve products with Base64-encoded images
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        const fetchedProducts = response.data.products;
        if (fetchedProducts.length > 0) {
          setImg(fetchedProducts[0].image);
          console.log(typeof fetchedProducts[0].image);
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching products:', error);
      });
  }, []);

  const data = [
    {
      name: 'image1',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image2',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image3',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image4',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image5',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image6',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image7',
      price: 9420,
      url: 'google.com',
    },
    {
      name: 'image8',
      price: 9420,
      url: 'google.com',
    },
  ];

  return (
    <div className='App'>
      <Navbar />
      <Shop data={data} />
      <Footer />
    </div>
  );
}

export default App;
