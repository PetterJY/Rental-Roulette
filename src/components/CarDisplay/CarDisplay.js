import "./CarDisplay.css";
import carImage from "../../resources/images/car.png"; 
import passengerImage from "../../resources/images/passenger.png";

const CarDisplay = (props) => {
  return (
    <article class="car-display">
      <section class="top-section">
        <h2 class="car-name">{props.carName}</h2>
        <article class="car-tag">{props.carTag}</article>
      </section>
      <aside class="passenger-tag">
        <img id="passenger-image" src={passengerImage}></img>
        <h2 class="passenger-count">{props.passengerCount}</h2>
      </aside>
      <figure class="car-image-wrapper">
        <img id="car-image" src={carImage}></img>
      </figure>
      <section class="bottom-section">
        <h2 class="rental-place">{props.rentalPage}</h2>
        <section class="price-section">
          <h2 id="price-day">{props.priceDay}</h2>
          <h2 id="price-total">{props.priceTotal}</h2>
        </section>
      </section>
    </article> 
  )
}

export default CarDisplay;