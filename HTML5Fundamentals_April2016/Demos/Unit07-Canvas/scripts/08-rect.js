function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.fillRect(80, 80, 40, 40);
    context.strokeRect(60, 60, 80, 80);
    context.clearRect(90, 90, 20, 20);
  }
}