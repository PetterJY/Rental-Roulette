import "./CarDisplay.css";
import carImage from "../../resources/images/car.png"; 
import passengerImage from "../../resources/images/passenger.png";

const CarDisplay = (props) => {
  return (
    <article className="car-display">
      <section className="top-section">
        <h2 className="car-name">{props.carName}</h2>
        <article className="car-tag">{props.carTag}</article>
      </section>
      <aside className="passenger-tag">
        <img id="passenger-image" src={passengerImage} alt="Passenger" />
        <h2 class="passenger-count">{props.passengerCount}</h2>
      </aside>
      <figure class="car-image-wrapper">
        <img id="car-image" src={carImage}></img>
      </figure>
      <section class="bottom-section">
        <h2 class="rental-place">{props.rentalPlace}</h2>
        <section class="price-section">
          <h2 id="price-day">{props.priceDay}</h2>
          <h2 id="price-total">{props.priceTotal}</h2>
        </section>
      </section>
    </article> 
  )
}

export default CarDisplay;