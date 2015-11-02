function drawLine(x1, y1, x2, y2, color, width, cap) {
    var canvas = document.getElementById("my-canvas");
    if (!canvas.getContext) return;
    var context = canvas.getContext("2d");
    context.lineWidth = width;
    context.lineCap = cap; //butt,round,square
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}