import "./BookingPage.css";

const BookingPage = (props) => {
  return (
    <body>
        <div id="wrapper">
            <header class="header">
                <div class="top-header">
                    <img src="../../resources/images/logo.png" id="logo-image"></img>
                    <nav class="nav-bar">
                        <img src="../../resources/images/login.png" id="login-image"></img>
                        <button id="login-create">Login|Register</button>
                    </nav>
                </div>
            </header>
        </div>
        <main>
            <section class="driver-information-form">
                <form action="/submit-booking" method="post" class="grid-container"> 
                    <h2 class="driver-information">Driver Information</h2>   
                        <div class="e-mail">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>  
                        <div class="first-name">
                            <label for="name">First Name:</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div class="last-name">
                            <label for="last-name">Last Name:</label>
                            <input type="text" id="last-name" name="last-name" required></input>
                        </div>
                </form>
                    <button type="submit">Book Now</button>
            </section>

            <div class="car-information-form">
                <header class="car-rental-header">
                    <div class="rectangle-display">
                        <img id="car-image" src="../../resources/images/car.png"></img>
                    </div>      
                    <div class="car-rental-details">
                        <h2 class="car-name">Car Name</h2>
                        <p class="rent-period">Car rental period</p>
                    </div>
                </header>
                <section class="rental-schedule-container">

                    <div class="rental-schedule-logos">
                        <img src="../../resources/images/storage-logo.png" class="pickup-logo"></img>
                        <div class="vertical-line"></div>
                        <img src="../../resources/images/storage-logo.png" class="dropoff-logo"></img>
                    </div>
                    <div class="rental-schedule-text">
                        <div class="pickup-info">
                            <p class="pickup">Pickup</p>
                            <h4>Ålesund</h4>
                            <p class="pickup-time">Da., xx.Mnth., year | xx:xx</p>
                        </div>
                        <div class="dropoff-info">
                            <p class="dropoff">Dropoff</p>
                            <h4>Ålesund</h4>
                            <p class="dropoff-time">Da., xx.Mnth., year | xx:xx</p>
                        </div>
                    </div>
                </section>
                <div class="payment-details">
                    <p>Renting costs:</p>
                    <p>xxxxkr/day</p>
                    <h3>Total: XX XXXkr</h3>
                </div>
            </div>
        </main>
    </body>
  )
}

export default BookingPage;