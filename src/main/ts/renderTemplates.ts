document.addEventListener("DOMContentLoaded", function() {
  const carDisplayTemplateSource = (document.getElementById("car-display-template") as HTMLScriptElement).innerHTML;
  const carDisplayTemplate = Handlebars.compile(carDisplayTemplateSource);

  interface CarData {
    "car-name": string;
    "car-tag": string;
    "passenger-count": string;
    "rental-place": string;
    "price-day": string;
    "price-total": string;
  }

  const carData: CarData[] = [
    {
      "car-name": "Toyota Yaris M55",
      "car-tag": "Electric",
      "passenger-count": "5",
      "rental-place": "Ålesund kommune",
      "price-day": "2155 kr/day",
      "price-total": "13550 kr/day"
    },
    {
      "car-name": "Toyota Yaris M55",
      "car-tag": "Electric",
      "passenger-count": "5",
      "rental-place": "Ålesund kommune",
      "price-day": "2155 kr/day",
      "price-total": "13550 kr/day"
    },
    {
      "car-name": "Toyota Yaris M55",
      "car-tag": "Electric",
      "passenger-count": "5",
      "rental-place": "Ålesund kommune",
      "price-day": "2155 kr/day",
      "price-total": "13550 kr/day"
    }
  ];

  const carDisplayContainer = document.querySelector(".triple-section") as HTMLElement;
  carData.forEach(car => {
    const carDisplayHTML = carDisplayTemplate(car);
    carDisplayContainer.innerHTML += carDisplayHTML;
  });
});