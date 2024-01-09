var latitude, longitude;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  getTemperature(latitude, longitude);
}

function getTemperature(lat, lon) {
  // Make an API request
  var apiKey = "YOUR_API_KEY"; // replace with your API key
  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.main.temp;
      document.getElementById("info").innerHTML=`The temperature is ${temperature} degrees Celsius.`
    })
    .catch(error => console.log(error));
}