window.addEventListener("load", setup, false);

function setup() {
    var canvas = document.getElementById("my-canvas");
    var context;
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        draw(context);
    }
}

function draw(context) {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(100, 100);
    context.lineTo(150, 50);
    context.closePath();
    context.stroke();
}