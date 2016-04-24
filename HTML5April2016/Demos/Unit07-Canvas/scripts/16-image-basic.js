window.addEventListener("load", draw, false);

function draw() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var logo = new Image();
    logo.src = 'images/logo.png';
    logo.onload = function () {
      context.drawImage(logo, 50, 50);
    };
  }
}