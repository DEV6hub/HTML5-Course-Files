window.addEventListener("load", function () {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(50, 50);
        context.arc(50, 50, 40, 0, degreesToRadians(360), true);
        context.fillStyle = "rgba(255,0,0,.1)";
        context.fill();
    }
}, false);

function centerPoint() {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context.fillStyle = "rgba(0,0,0,1)";
        context = canvas.getContext("2d");
        context.beginPath();
        context.arc(50, 50, 2, 0, degreesToRadians(360), true);
        context.fill();
    }
}

function radius() {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(50 + 40, 50);
        context.stroke();
    }
}

function showArc(ccw) {
    var canvas = document.getElementById("my-canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        context.beginPath();
        context.arc(50, 50, 40, 0, degreesToRadians(90), ccw);
        context.stroke();
    }
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}
