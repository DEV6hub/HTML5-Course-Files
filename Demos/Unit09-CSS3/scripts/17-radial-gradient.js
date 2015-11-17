var canvas = document.getElementById("canvas");
var context = document.getElementById('canvas').getContext("2d");
var canvas_x = canvas.offsetLeft;
var canvas_y = canvas.offsetTop;
var canvas_w = canvas.width;
var canvas_h = canvas.height;
var origin = {x:canvas_w/2, y:canvas_h/2};
var ua_prefix = '';


function onMouseMove(_event){
  document.getElementById("canvas").setAttribute('style', style_value);
  document.getElementById("styleCodeSnippet").innerHTML = "#canvas {<br>&nbsp;&nbsp;&nbsp;" + style_value_display + "<br>}";

}


//
function doload() {

  if (navigator.userAgent.indexOf('WebKit') != -1) {
    ua_prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Opera') != -1) {
    ua_prefix = '-o-';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    ua_prefix = '-moz-';
  }
}