import React from 'react';
import RentalPage from './RentalPage';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import CarDisplay from './CarDisplay';

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