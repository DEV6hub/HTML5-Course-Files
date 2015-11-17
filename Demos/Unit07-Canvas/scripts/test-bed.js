window.addEventListener("load", setup, false);

function setup() {
  var canvas = document.getElementById("my-canvas");
  var context;
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    //Start paste from code generated from bezier.html or quadratic.html
    context.beginPath();
    context.strokeStyle = 'rgb(255,0,0)';
    context.moveTo(446, 175);
    context.bezierCurveTo(480, 229, 255, 305, 229, 391);
    context.stroke();
    context.beginPath();
    context.moveTo(229, 391);
    context.bezierCurveTo(237, 304, 12, 216, 20, 155);
    context.stroke();
    context.beginPath();
    context.moveTo(20, 155);
    context.bezierCurveTo(97, 19, 155, 17, 253, 149);
    context.stroke();
    context.beginPath();
    context.moveTo(253, 149);
    context.bezierCurveTo(330, 17, 400, 15, 446, 175);
    context.stroke();

    //End paste
    context.stroke();
  }
}