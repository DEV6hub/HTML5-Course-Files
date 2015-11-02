  var canvas = document.getElementById("canvas");
      var context = document.getElementById('canvas').getContext("2d");
      var canvas_w = canvas.width;
      var canvas_h = canvas.height;
  var center_point = {x:canvas_w/2, y:canvas_h/2}; // center of canvas
  var end_point = {x:0, y:0};
  var gradient_direction = '';
  var ua_prefix = '';

  onload = doload;

  function doload() {

    drawCenterPoint(center_point);

    document.getElementById('tl').addEventListener("click", handleRadioClick);
    document.getElementById('top').addEventListener("click", handleRadioClick);
    document.getElementById('tr').addEventListener("click", handleRadioClick);

    document.getElementById('left').addEventListener("click", handleRadioClick);
    document.getElementById('right').addEventListener("click", handleRadioClick);

    document.getElementById('br').addEventListener("click", handleRadioClick);
    document.getElementById('bottom').addEventListener("click", handleRadioClick);
    document.getElementById('bl').addEventListener("click", handleRadioClick);


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

  function handleRadioClick(_event) {
    context.clearRect (0, 0, canvas_w, canvas_h);

    switch (_event.target.id) {
      case 'tl' :
      end_point = {x:0, y:0};
      gradient_direction = 'top left';
      break;
      case 'top' :
      end_point = {x:canvas_w/2, y:0};
      gradient_direction = 'top';
      break;
      case 'tr' :
      end_point = {x:canvas_w, y:0};
      gradient_direction = 'top right';
      break;
      case 'left' :
      end_point = {x:0, y:canvas_h/2};
      gradient_direction = 'left';
      break;
      case 'right' :
      end_point = {x:canvas_w, y:canvas_h/2};
      gradient_direction = 'right';
      break;
      case 'bl' :
      end_point = {x:0, y:canvas_h};
      gradient_direction = 'bottom left';
      break;
      case 'bottom' :
      end_point = {x:canvas_w/2, y:canvas_h};
      gradient_direction = 'bottom';
      break;
      case 'br' :
      end_point = {x:canvas_w, y:canvas_h};
      gradient_direction = 'bottom right';
      break;
    }
    drawArrow();

    var style_value = 'background: ' + ua_prefix + 'linear-gradient(' + gradient_direction + ', red, blue );';
    var style_value_display = 'background: ' + ua_prefix + 'linear-gradient(<span id="gradDirection">' + gradient_direction + '</span>, red, blue );';

    document.getElementById("canvas").setAttribute('style', style_value);
    document.getElementById("styleCodeSnippet").innerHTML = "#canvas {<br>&nbsp;&nbsp;&nbsp;" + style_value_display + "<br>}";


  }

  //  draws a circle at middle of the canvas
  function drawCenterPoint() {
    context.beginPath();
    context.strokeStyle = "#000000";
    context.arc(center_point.x, center_point.y, 5, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }

  function drawArrow() {
    drawCenterPoint();
    context.moveTo(center_point.x, center_point.y);
    context.lineTo(end_point.x, end_point.y);
    context.strokeStyle = "#000000";
    context.stroke();
  }
