function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    context = canvas.getContext("2d");

    //boat
    context.fillStyle = "rgb(0,204,153)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(25, 160);
    context.lineTo(70, 180);
    context.lineTo(150, 180);
    context.lineTo(175, 160);
    context.closePath();
    context.stroke();
    context.fill();

    //pole
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 160);
    context.lineTo(100, 50);
    context.stroke();

    //left sail
    context.beginPath();
    context.fillStyle = "rgb(255,255,0)";
    context.moveTo(96, 50);
    context.lineTo(50, 155);
    context.lineTo(90, 140);
    context.fill();

    //right sail
    context.beginPath();
    context.moveTo(104, 50);
    context.lineTo(160, 150);
    context.lineTo(110, 150);
    context.fill();
  }
}