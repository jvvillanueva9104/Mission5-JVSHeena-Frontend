import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Shop from './pages/Shop';

function App() {
  return (
    <div className='App'>
      <Shop />
    </div>
  );
}

export default App;