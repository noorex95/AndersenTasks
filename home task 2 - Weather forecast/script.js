function getWeather() {

var city = document.getElementById('changeCity').value;

var xml = new XMLHttpRequest();
xml.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=f3f57a0338f875ad49458568b6093624', false);
xml.send();


// Begin accessing JSON data here
var data = JSON.parse(xml.response);


var temperature = data.main.temp;
var weather = data.weather[0].main;
var clouds = data.clouds.all;
var wind = data.wind.speed;

//Celsius conversion
var tempInCelcius = temperature - 273,15;


//document.getElementById("location").innerHTML = city;
document.getElementById("temperature").innerHTML = tempInCelcius.toFixed(0) + " C";
document.getElementById("weather").innerHTML = weather;
document.getElementById("wind").innerHTML = wind.toFixed(0) + " km/h";
document.getElementById('clouds').innerHTML = clouds + ' %';
document.getElementById("weather forecast").style.display = "block";
}
