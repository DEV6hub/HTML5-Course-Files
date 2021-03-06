 function drawPath() {
   var canvas = document.getElementById("my-canvas");
   if (canvas.getContext) {
     context = canvas.getContext("2d");

     //boat
     context.fillStyle = "rgb(0,204,153)";
     context.strokeStyle = "rgb(102,102,51)";
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

     blink(context, "rgb(255,255,0)");
     addSailor(context);
   }
 }

 function blink(context, color) {
   context.fillStyle = color;
   context.beginPath();
   context.moveTo(96, 50);
   context.lineTo(50, 155);
   context.lineTo(90, 140);
   context.fill();
   if (color == "rgb(255,255,0)") {
     color = "rgb(255,204,0)";
   } else {
     color = "rgb(255,255,0)";
   }
   setTimeout(function () {
     blink(context, color);
   }, 250);
 }

 function addSailor(context) {
   context.strokeStyle = "rgb(0,0,0)";
   context.lineWidth = 1;
   context.beginPath();
   //left leg
   context.moveTo(130, 160);
   context.lineTo(135, 152);
   //right leg
   context.lineTo(140, 160);
   //body
   context.moveTo(135, 152);
   context.lineTo(135, 140);
   //arms
   context.moveTo(130, 145);
   context.lineTo(140, 145);
   context.stroke();
   //square head
   context.beginPath();
   context.lineWidth = 5;
   context.moveTo(135, 140);
   context.lineTo(135, 135);
   context.stroke();
 }