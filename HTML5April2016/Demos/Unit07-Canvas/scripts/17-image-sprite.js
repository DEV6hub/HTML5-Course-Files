var img;
window.addEventListener("load", function () {
  img = new Image();
  img.src = 'Images/evolution.gif';
  draw();
}, false);

function draw() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    img.onload = function () {
      context.drawImage(img, 10, 10, 60, 140, 60, 20, 60, 140);
      document.getElementById("btnEvolve").disabled = false;
    }
  }
}

function evolve(pic) {
  var pics = [
    {
      "sx": 10,
      "w": 60,
      },
    {
      "sx": 74,
      "w": 66
      },
    {
      "sx": 143,
      "w": 60
      },
    {
      "sx": 217,
      "w": 55
      },
    {
      "sx": 270,
      "w": 55
      },
    {
      "sx": 324,
      "w": 70
      }
      ];
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 200, 200);
    context.drawImage(img, pics[pic].sx, 10, pics[pic].w, 140, 60, 20, pics[pic].w, 140);
  }
  if (pic < 5) {
    setTimeout(function () {
      pic++;
      evolve(pic);
    }, 250);
  }
}