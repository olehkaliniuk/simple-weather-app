const apiKey = "e1452379b8f948df92e110706232209";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
let city;

const temp = document.querySelector(".card-value");
const cardCity = document.querySelector(".card-city");
const cardCDesk = document.querySelector(".card-description");
const cardCImg = document.querySelector(".card-img");

form.onsubmit = function (e) {
  e.preventDefault();
  let city = input.value.trim();

  const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(query)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      temp.innerHTML = data.current.temp_c + "°c";
      cardCity.innerHTML = data.location.name;
      cardCDesk.innerHTML = data.current.condition.text;
      cardCImg.src = data.current.condition.icon;
      console.log(data);
    });
};
