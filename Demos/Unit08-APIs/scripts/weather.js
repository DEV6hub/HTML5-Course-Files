function getWeather(){
  var xmlhttp = new XMLHttpRequest();
  console.log('ready');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var xmlDoc = JSON.parse(xmlhttp.responseText);
      var weather = JSON.stringify(xmlDoc.weather);
      document.getElementById("weather").innerHTML = JSON.stringify(xmlDoc.weather);
      // document.getElementById("main").innerHTML = JSON.stringify(xmlDoc.main);
      console.log(xmlDoc);
    }
  };
  xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Toronto,on&appid=2de143494c0b295cca9337e1e96b00e0");
  xmlhttp.send();
}
