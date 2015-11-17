window.addEventListener("load", start, false);

function start() {
  drawMan(220, 220, 10, 10, -5, -5, 5, 5);
}

var timer = null;

function drawMan(baseX, baseY, incrX, incrY, baseXSnitch, baseYSnitch, incrXSnitch, incrYSnitch) {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    var context, scale;
    context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width * 1.1, canvas.height * 1.1);
    context.globalCompositeOperation = "source-over";

    //hair
    context.beginPath();
    context.fillStyle = "rgb(0,0,0)";
    context.arc(baseX, baseY, 60, 0, Math.PI, true);
    context.fill();

    //head
    context.beginPath();
    context.strokeStyle = "rgb(0,0,0)";
    context.fillStyle = "rgb(255,255,177)";
    context.arc(baseX, baseY, 50, 0, Math.PI * 2, false);
    context.stroke();
    context.fill();


    //smile
    context.beginPath();
    context.fillStyle = "rgb(153,0,0)";
    context.arc(baseX, baseY + 15, 20, 0, Math.PI, false);
    context.fill();

    //left eye
    context.beginPath();
    context.fillStyle = "rgb(0,153,0)";
    context.arc(baseX - 20, baseY - 15, 4, 0, Math.PI * 2, false);
    context.fill();

    //left eye glass
    context.strokeStyle = "rgb(0,0,0)";
    context.moveTo(baseX - 9, baseY - 15);
    context.arc(baseX - 20, baseY - 15, 11, 0, Math.PI * 2, false);
    context.stroke();

    //right eye
    context.beginPath();
    context.arc(baseX + 20, baseY - 15, 4, 0, Math.PI * 2, false);
    context.fill();

    //right eye glass
    context.strokeStyle = "rgb(0,0,0)";
    context.moveTo(baseX + 31, baseY - 15);
    context.arc(baseX + 20, baseY - 15, 11, 0, Math.PI * 2, false);

    //lens connector
    context.moveTo(baseX + 8, baseY - 15);
    context.lineTo(baseX - 9, baseY - 15);
    context.stroke();


    //nose
    context.beginPath();
    context.fillStyle = "rgb(255,153,102)";
    context.arc(baseX, baseY, 8, 0, Math.PI * 2, false);
    context.fill();

    //scar
    context.strokeStyle = "rgb(102,51,51)";
    context.moveTo(baseX - 15, baseY - 28);
    context.lineTo(baseX - 10, baseY - 35);
    context.lineTo(baseX - 5, baseY - 32);
    context.lineTo(baseX - 1, baseY - 42);
    context.stroke();


    //body
    context.beginPath();
    context.lineWidth = 8;
    context.strokeStyle = "rgb(204,0,0)";
    context.moveTo(baseX, baseY + 50);
    context.lineTo(baseX - 4, baseY + 85);
    context.lineTo(baseX, baseY + 100);

    context.stroke();

    context.beginPath();
    context.strokeStyle = "rgb(204,200,0)";

    //legs are narrower
    context.lineWidth = 6;

    //left leg
    context.moveTo(baseX, baseY + 100);
    context.lineTo(baseX + 25, baseY + 125);
    context.lineTo(baseX + 35, baseY + 125);

    //right leg
    context.moveTo(baseX, baseY + 100);
    context.lineTo(baseX - 25, baseY + 125);
    context.lineTo(baseX - 35, baseY + 125);

    context.stroke();

    //arms are still narrower
    context.lineWidth = 4;

    //left arm
    context.moveTo(baseX - 4, baseY + 65);
    if (incrY > 0) {
      context.lineTo(baseX + 15, baseY + 100);
      context.lineTo(baseX + 10, baseY + 118);
    } else {
      context.lineTo(baseX + 10, baseY + 93);
      context.lineTo(baseX + 25, baseY + 102);
    }

    //right arm
    context.moveTo(baseX - 4, baseY + 65);
    if (incrY > 0) {
      context.lineTo(baseX - 10, baseY + 104);
      context.lineTo(baseX + 10, baseY + 122);
    } else {
      context.lineTo(baseX - 10, baseY + 97);
      context.lineTo(baseX + 15, baseY + 104);
    }

    context.stroke();
    context.lineWidth = 4;
    context.strokeStyle = "rgb(204,153,102)";

    //broom
    context.globalCompositeOperation = "destination-over";
    context.beginPath();
    var x1, y1, x2, y2, broomEndIncr;
    if (incrY > 0) {
      x1 = baseX + 105;
      y1 = baseY + 230;
      x2 = baseX - 50;
      y2 = baseY + 50;
      broomEndIncr = 0;
    } else {
      x1 = baseX + 105;
      y1 = baseY + 85;
      x2 = baseX - 50;
      y2 = baseY + 120;
      broomEndIncr = 50;
    }

    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    //broom end
    context.lineWidth = 2;
    context.lineTo(x2 - 40, y2 - 10 + broomEndIncr);
    context.moveTo(x2, y2);
    context.lineTo(x2 - 30, y2 - 20 + broomEndIncr);
    context.moveTo(x2, y2);
    context.lineTo(x2 - 30, y2 - 30 + broomEndIncr);
    context.moveTo(x2, y2);
    context.lineTo(x2 - 30, y2 - 40 + broomEndIncr);
    context.moveTo(x2, y2);
    context.lineTo(x2 - 30, y2 - 50 + broomEndIncr);
    context.moveTo(x2, y2);
    context.lineTo(x2 - 20, y2 - 60 + broomEndIncr);

    context.stroke();

    if ((baseY > baseYSnitch - 5 && baseY < baseYSnitch + 5) && (baseX > baseXSnitch - 5 && baseX < baseXSnitch + 5)) {
      document.getElementById("cheer").play();
      stop();
      context.globalCompositeOperation = "source-over";
      context.fillStyle = "rgb(204,204,0)";
      context.beginPath();
      context.arc(baseX, baseY + 23, 8, 0, Math.PI * 2, false);
      context.fill();
      context.font = "55pt Elephant";
      context.fillStyle = "rgb(255,255,255)";
      context.strokeText("Got it!", 100, 100);
      return;
    }

    if (baseX > baseXSnitch) {
      incrX = -10 * Math.random();
    } else {
      incrX = 10 * Math.random();
    }

    scale = 1.01; //1.00 = no scaling. works best in IE9 and Chrome
    if (baseY > baseYSnitch) {
      incrY = -10 * Math.random();
      scale = 2 - scale;
    } else {
      incrY = 10 * Math.random();
    }

    if (baseXSnitch > canvas.width) {
      incrXSnitch = -15 * Math.random();
    } else if (baseXSnitch < 0) {
      incrXSnitch = 15 * Math.random();
    }

    if (baseYSnitch > canvas.height) {
      incrYSnitch = -15 * Math.random();
    } else if (baseYSnitch < 0) {
      incrYSnitch = 15 * Math.random();
    }

    //for depth
    context.scale(scale, scale);


    //snitch
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgb(204,204,0)";
    context.beginPath();
    context.arc(baseXSnitch, baseYSnitch, 8, 0, Math.PI * 2, false);
    context.fill();

    timer = setTimeout(function () {
      drawMan(baseX + incrX, baseY + incrY, incrX, incrY, baseXSnitch + incrXSnitch, baseYSnitch + incrYSnitch, incrXSnitch, incrYSnitch);
    }, 20);
  }
}

function stop() {
  clearTimeout(timer);
}