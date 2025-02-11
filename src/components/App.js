import React from 'react';
import RentalPage from './RentalPage/RentalPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';
import CarDisplay from './CarDisplay/CarDisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <RentalPage />
      <Footer />
    </div>
  );
}

export default App;