function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    context.lineWidth = 10;
    context.strokeStyle = "rgb(255,0,0)";
    context.fillStyle = "rgb(204,255,255)";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(100, 100);
    context.lineTo(100, 50);
    context.closePath();
    context.stroke();
    context.fill();
  }
}