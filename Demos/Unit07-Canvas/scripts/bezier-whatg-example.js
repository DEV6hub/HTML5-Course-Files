        var context = document.getElementById('my-canvas').getContext('2d');

        var lastX = context.canvas.width * Math.random();
        var lastY = context.canvas.height * Math.random();
        var hue = 0;
        function line() {
            context.save();
            context.translate(context.canvas.width / 2, context.canvas.height / 2);
            context.scale(0.9, 0.9);
            context.translate(-context.canvas.width / 2, -context.canvas.height / 2);
            context.beginPath();
            context.lineWidth = 5 + Math.random() * 10;
            context.moveTo(lastX, lastY);
            lastX = context.canvas.width * Math.random();
            lastY = context.canvas.height * Math.random();
            context.bezierCurveTo(context.canvas.width * Math.random(),
                context.canvas.height * Math.random(),
                context.canvas.width * Math.random(),
                context.canvas.height * Math.random(),
                lastX, lastY);

            hue = hue + 10 * Math.random();
            context.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
            context.shadowColor = 'white';
            context.shadowBlur = 10;
            context.stroke();
            context.restore();
        }
        setInterval(line, 50);

        function blank() {
            context.fillStyle = 'rgba(0,0,0,0.1)';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        }
        setInterval(blank, 40);