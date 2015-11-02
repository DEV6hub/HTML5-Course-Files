function drawPath() {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        //day
        context.canvas.style.backgroundColor = "rgb(153,153,255)";
        //add code here
    }
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}