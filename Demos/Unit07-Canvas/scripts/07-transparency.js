function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    context.fillStyle = "rgba(255,0,0,1)";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 0);
    context.lineTo(100, 200);
    context.fill();
    context.fillStyle = "rgba(0,0,255,.3)";
    context.beginPath();
    context.moveTo(0, 200);
    context.lineTo(200, 200);
    context.lineTo(100, 0);
    context.fill();
  }
}