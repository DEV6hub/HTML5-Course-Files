   function drawPath() {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(100, 100);
        context.moveTo(50, 60);
        context.lineTo(100, 110);
        context.moveTo(50, 70);
        context.lineTo(100, 120);
        context.stroke();
    }
}