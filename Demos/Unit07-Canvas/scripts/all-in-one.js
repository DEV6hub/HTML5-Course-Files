  window.addEventListener("load", setup, false);

  function setup() {
    var canvas = document.getElementById("my-canvas");
    var context;
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        setLineProps(context, 10, 'square');
        setStrokeProps(context, 'rgb(100,25,0)');
        setFillProps(context, 'rgb(255,0,255)');
    }
}

function setLineProps(context, width, cap) {
    context.lineWidth = width;
            context.lineCap = cap; //butt,round,square
        }

        function setStrokeProps(context, color) {
            context.strokeStyle = color;
        }

        function setFillProps(context, color) {
            context.fillStyle = color;
        }

        function line(x1, y1, x2, y2) {
            var canvas = document.getElementById("my-canvas");
            if (!canvas.getContext) return;
            var context = canvas.getContext("2d");
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
        }

        function triangle(x1, y1, x2, y2, x3, y3) {
            var canvas = document.getElementById("my-canvas");
            if (!canvas.getContext) return;
            var context = canvas.getContext("2d");
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.lineTo(x3, y3);
            context.closePath();
            context.stroke();
        }

        function rectangle(type, x, y, w, h) {
            var canvas = document.getElementById("my-canvas");
            if (!canvas.getContext) return;
            var context = canvas.getContext("2d");
            switch (type) {
                case "fill" :
                context.fillRect(x, y, w, h);
                break;
                case "stroke" :
                context.strokeRect(x, y, w, h);
                break;
                case "clear" :
                context.clearRect(x, y, w, h);
                break;
            }
        }

        function degreesToRadians(degrees) {
            return (Math.PI / 180) * degrees;
        }

        function circle(type, x, y, radius, startAngle, endAngle, anticlockwise) {
            var canvas = document.getElementById("my-canvas");
            if (!canvas.getContext) return;
            var context = canvas.getContext("2d");
            var start = degreesToRadians(startAngle);
            var end = degreesToRadians(endAngle);
            context.moveTo(x + radius, y);
            context.arc(x, y, radius, start, end, anticlockwise);
            switch (type) {
                case "fill" :
                context.fill();
                break;
                case "stroke" :
                context.stroke();
                break;
            }
        }

        function curve(type, cp1x, cp1y, cp2x, cp2y, x, y) {
            var canvas = document.getElementById("my-canvas");
            if (!canvas.getContext) return;
            var context = canvas.getContext("2d");
            context.moveTo(x, y);
            switch (arguments.length) {
                case 5 : //quadratic curve
                context.quadraticCurveTo(cp1x, cp1y, x, y);
                break;
                case 7 : //bezier curve
                context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
                break;
                default : //error
                throw("Wrong number of arguments");
            }
            switch (type) {
                case "fill" :
                context.fill();
                break;
                case "stroke" :
                context.stroke();
                break;
            }
        }
