window.addEventListener("load", setup, false);
var colorChanged = true;

function setup() {
  var canvas = document.getElementById("my-canvas");
  var context;
  if (canvas.getContext) {
    context = canvas.getContext("2d");
    setColor(context);
    setLineProps(context, 1, 'square');
    markCenter(context);
    canvas.addEventListener("click", recordClick, false);
    document.getElementById('blue').addEventListener("change", function () {
      setColor(context);
    }, false);
    document.getElementById('red').addEventListener("change", function () {
      setColor(context);
    }, false);
    document.getElementById('green').addEventListener("change", function () {
      setColor(context);
    }, false);
  }
}

function markCenter(context) {
  circle("fill", 250, 250, 5, 0, 360, true);
  context.fillText("mid", 255, 245);
}

function setColor(context) {
  colorChanged = true;
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  document.getElementById("red-output").innerHTML = red;
  document.getElementById("green-output").innerHTML = green;
  document.getElementById("blue-output").innerHTML = blue;
  document.getElementById("color").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  context.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
}

function setLineProps(context, width, cap) {
  context.lineWidth = width;
  context.lineCap = cap; //butt,round,square
}

function degreesToRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

function circle(type, x, y, radius, startAngle, endAngle, anticlockwise) {
  var canvas = document.getElementById("my-canvas");
  if (!canvas.getContext) return;
  var context = canvas.getContext("2d");
  var start = degreesToRadians(startAngle);
  var end = degreesToRadians(endAngle);
  context.moveTo(x + radius, y);
  context.arc(x, y, radius, start, end, anticlockwise);
  switch (type) {
  case "fill":
    context.fill();
    break;
  case "stroke":
    context.stroke();
    break;
  }
}

var startx, starty, cp1x, cp1y, cp2x, cp2y, endx, endy;
var clicks = 0;

function recordClick(e) {
  var canvas = document.getElementById("my-canvas");
  if (!canvas.getContext) return;
  var context = canvas.getContext("2d");
  clicks++;
  if (clicks == 5) clicks = 1;
  context.beginPath();
  switch (clicks) {
  case 1:
    resetCoordinates(false);
    startx = getMouseX(e);
    starty = getMouseY(e);
    document.getElementById('startx').innerHTML = startx;
    document.getElementById('starty').innerHTML = starty;
    circle("stroke", startx, starty, 4, 0, 360, true);
    context.fillText("start", startx + 5, starty - 5);
    break;
  case 2:
    endx = getMouseX(e);
    endy = getMouseY(e);
    document.getElementById('endx').innerHTML = endx;
    document.getElementById('endy').innerHTML = endy;
    circle("stroke", endx, endy, 4, 0, 360, true);
    context.fillText("end", endx + 5, endy - 5);
    break;
  case 3:
    cp1x = getMouseX(e);
    cp1y = getMouseY(e);
    document.getElementById('cp1x').innerHTML = cp1x;
    document.getElementById('cp1y').innerHTML = cp1y;
    circle("stroke", cp1x, cp1y, 4, 0, 360, true);
    context.fillText("c1", cp1x + 5, cp1y - 5);
    break;
  case 4:
    context.restore();
    cp2x = getMouseX(e);
    cp2y = getMouseY(e);
    document.getElementById('cp2x').innerHTML = cp2x;
    document.getElementById('cp2y').innerHTML = cp2y;
    circle("stroke", cp2x, cp2y, 4, 0, 360, true);
    context.fillText("c2", cp2x + 5, cp2y - 5);
    context.moveTo(startx, starty);
    context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endx, endy);
    context.stroke();
    document.getElementById("code").value += "context.beginPath();\n";
    if (colorChanged) {
      var red = document.getElementById('red').value;
      var green = document.getElementById('green').value;
      var blue = document.getElementById('blue').value;
      document.getElementById("code").value += "context.strokeStyle='rgb(" + red + "," + green + "," + blue + ")';\n";
      colorChanged = false;
    }
    document.getElementById("code").value += "context.moveTo(" + startx + "," + starty + ");\n";
    document.getElementById("code").value += "context.bezierCurveTo(" + cp1x + "," + cp1y + "," + cp2x + "," + cp2y + "," + endx + "," + endy + ");\n";
    document.getElementById("code").value += "context.stroke();\n";
    break;
  }
}

function getMouseX(e) { //modified from http://diveintohtml5.org/canvas.html#divingin
  var x;
  if (e.pageX != undefined) {
    x = e.pageX;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  }
  x -= document.getElementById("my-canvas").offsetLeft;
  return x;
}

function getMouseY(e) {
  var y;
  if (e.pageY != undefined) {
    y = e.pageY;
  } else {
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  y -= document.getElementById("my-canvas").offsetTop;
  return y;
}

function erase() {
  var canvas = document.getElementById("my-canvas");
  if (!canvas.getContext) return;
  var context = canvas.getContext("2d");
  resetCoordinates(true);
  context.beginPath();
  context.clearRect(0, 0, 500, 500);
  markCenter(context);
  document.getElementById("code").value = "";
}

function resetCoordinates(resetClicks) {
  if (resetClicks) clicks = 0;
  var canvas = document.getElementById("my-canvas");
  if (!canvas.getContext) return;
  var context = canvas.getContext("2d");
  startx = "unknown";
  starty = "unknown";
  endx = "unknown";
  endy = "unknown";
  cp1x = "unknown";
  cp1y = "unknown";
  cp2x = "unknown";
  cp2y = "unknown";
  document.getElementById('startx').innerHTML = startx;
  document.getElementById('starty').innerHTML = starty;
  document.getElementById('endx').innerHTML = endx;
  document.getElementById('endy').innerHTML = endy;
  document.getElementById('cp1x').innerHTML = cp1x;
  document.getElementById('cp1y').innerHTML = cp1y;
  document.getElementById('cp2x').innerHTML = cp2x;
  document.getElementById('cp2y').innerHTML = cp2y;
}