var canvas = document.getElementById("canvas");
var context = document.getElementById('canvas').getContext("2d");
var canvas_x = canvas.offsetLeft;
var canvas_y = canvas.offsetTop;
var canvas_w = canvas.width;
var canvas_h = canvas.height;
var origin = {x:canvas_w/2, y:canvas_h/2};
var ua_prefix = '';

// draw the quadrants on load
onload = doload;

//  update on mouse movement
canvas.onmousemove = onMouseMove;

//  draws a small circle at the center of the canvas
function drawCenterPoint(origin){
  context.beginPath();
  context.strokeStyle = "#000000";
  context.arc(origin.x, origin.y, 5, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}
function onMouseMove(_event){
//  reset the canvas
canvas.width = canvas.width;

var mouse_x = _event.clientX;
var mouse_y = _event.clientY;
var origin_x = origin.x;
var origin_y = origin.y;
var cartesian_angle = -(angleOfLine(origin_x, origin_y, mouse_x, mouse_y));
var display_angle = Math.round(cartesian_angle < 0 ? cartesian_angle + 360 : cartesian_angle);
var style_value = 'background: ' + ua_prefix + 'linear-gradient(' + display_angle + 'deg, red, blue ); ';
style_value += 'background: linear-gradient(' + display_angle + 'deg, red, blue );';
var style_value_display = 'background: ' + ua_prefix + 'linear-gradient(<span id="displayAngle">' + display_angle + 'deg</span>, red, blue ); <br>&nbsp;&nbsp;&nbsp;';
style_value_display += 'background: linear-gradient(<span id="displayAngle">' + display_angle + 'deg</span>, red, blue );';


//  redraw the x and y axes
drawCenterPoint(origin);

// draw angled line from origin
context.moveTo(origin.x, origin.y);
context.lineTo(mouse_x, mouse_y);
context.strokeStyle = "#000000";
context.stroke();

//  draw angle arc
context.beginPath();
context.strokeStyle = "#FF00FF";
context.arc(origin.x, origin.y, 75, degreesToRadians(360-display_angle), 0, false);
context.stroke();

document.getElementById("canvas").setAttribute('style', style_value);
document.getElementById("styleCodeSnippet").innerHTML = "#canvas {<br>&nbsp;&nbsp;&nbsp;" + style_value_display + "<br>}";

};

//  returns an angle in degrees for a single point
function atan2Degrees(y, x){
  return Math.atan2(y, x) * (180/Math.PI);
}
//  returns an angle in degrees given 2 points
function angleOfLine(x1, y1, x2, y2){
  return atan2Degrees(y2 - y1, x2 - x1);
}

// do UA sniffing
function doload() {
  drawCenterPoint(origin);
  if (navigator.userAgent.indexOf('WebKit') != -1) {
    ua_prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Opera') != -1) {
    ua_prefix = '-o-';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    ua_prefix = '-moz-';
  } else if (navigator.userAgent.indexOf('MSIE') != -1) {
    ua_prefix = '-ms-';
  }
}

//
function degreesToRadians(degrees) {
  return (Math.PI/180)*degrees;
}

