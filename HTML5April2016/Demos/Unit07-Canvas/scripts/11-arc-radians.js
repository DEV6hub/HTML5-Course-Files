function drawPath(counterclockwise) {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    context.restore();
    context.save();
    context.scale(1.5, 1.5);
    context.clearRect(0, 0, 200, 200);
    context.fillText("Radians", 80, 20);
    if (counterclockwise) {
      context.fillText("counter-clockwise", 10, 190);
    } else {
      context.fillText("clockwise", 10, 190);
    }
    context.moveTo(100, 100);
    context.arc(100, 100, 70, 0, 1, counterclockwise);
    context.fillText("1", 134, 156);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 60, 0, 2, counterclockwise);
    context.fillText("2", 75, 153);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 50, 0, 3, counterclockwise);
    context.fillText("3", 53, 110);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 40, 0, 4, counterclockwise);
    context.fillText("4", 74, 77);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 30, 0, 5, counterclockwise);
    context.fillText("5", 102, 79);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 20, 0, 6, counterclockwise);
    context.fillText("6", 111, 97);
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 10, 0, 2 * Math.PI, counterclockwise);
    context.stroke();
    context.beginPath();
    context.moveTo(110, 100);
    context.strokeStyle = "blue";
    context.lineTo(134, 176);
    context.fillText("2π", 136, 186);
    context.stroke();
  }
}