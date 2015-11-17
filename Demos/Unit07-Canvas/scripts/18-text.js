    window.addEventListener("load", draw, false);

        function draw() {
            var canvas = document.getElementById("my-canvas");
            if (canvas.getContext) {
                var context = canvas.getContext("2d");
                context.fillStyle = "red";
                context.strokeStyle = "blue";

                context.font = "italic small-caps bold 44pt 'Comic Sans MS'";
                context.textAlign = "left";
                context.strokeText("Hello", 10, 100);
                context.fillText("World!", 10 + context.measureText("Hello ").width, 100);
            }
        }