
  var xhr = new XMLHttpRequest();
  document.getElementById("userInput").innerHTML = userInput;
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+ userInput + "&appid=2de143494c0b295cca9337e1e96b00e0";
  xhr.open("GET", url);


  function getWeather(){
    console.log('ready');
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = JSON.parse(xhr.responseText);
      // var weather = JSON.stringify(xmlDoc.weather);
      document.getElementById("weather").innerHTML = JSON.stringify(xmlDoc.weather);
      // document.getElementById("main").innerHTML = JSON.stringify(xmlDoc.main);
      console.log(xmlDoc.weather);
    }
  }

  xhr.send();

