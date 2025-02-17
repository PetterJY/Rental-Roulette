import React from 'react';
import RentalPage from './RentalPage/RentalPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CarDisplay from './CarDisplay/CarDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RentalPage>
        <CarDisplay carName="Volvo" carTag="Diesel" passengerCount="5" rentalPage="Ålesund" priceDay="1200/day" priceTotal="8400/week" />
        <CarDisplay carName="Mercedes" carTag="Petrol" passengerCount="4" rentalPage="Oslo" priceDay="1500/day" priceTotal="10500/week" />
        <CarDisplay carName="BMW" carTag="Diesel" passengerCount="6" rentalPage="Bergen" priceDay="2000/day" priceTotal="14000/week" />
      </RentalPage>
      <Footer />
    </div>
  );
}

export default App;