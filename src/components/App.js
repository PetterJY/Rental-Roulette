import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Outlet} from "react-router-dom";
import RentalPage from './RentalPage/RentalPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BookingPage from './BookinPage/BookingPage';
import CarDisplay from './CarDisplay/CarDisplay';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={"/"} element={ <Root />}>
    <Route index element={<Navigate to={"/home"} replace />} />
    <Route path={"rental"} element={<RentalPage />} />
  </Route>
))

function App() {
return (
    <RouterProvider router={router}/>
);
}

function Root() {
  return (
    <div className="App">
      <Header />
      <BookingPage carName="Toyota Corolla" rentalPeriod="1 week" pickUpLocation="Airport" 
        pickUpTime="Th., 19. Mar., 2025 || 10:00" dropOffLocation="Hotel" dropOffTime="Sa., 21. Mar., 2025 || 10:00" 
        costPerDay="450kr/day" totalCost="Total: 900kr" />

      
      <Footer />
    </div>
    
  );
}

export default App;