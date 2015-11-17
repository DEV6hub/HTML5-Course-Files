function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(100, 100);
    context.stroke();
  }
}