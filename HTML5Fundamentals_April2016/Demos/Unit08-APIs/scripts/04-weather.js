function getWeather() {
  var xhr = new XMLHttpRequest();
  console.log('ready');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xDoc = JSON.parse(xhr.responseText);
      var weather = JSON.stringify(xDoc.weather);
      document.getElementById("weather").innerHTML = JSON.stringify(xDoc.weather[0].main);
      var temp = xDoc.main.temp;
      var celsius = temp - 273.15;
      document.getElementById("temp").innerHTML = Math.round(celsius) + "&#176;" + "C";
      console.log(xDoc);
    }
  };
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Toronto,on&appid=2de143494c0b295cca9337e1e96b00e0");
  xhr.send();
}