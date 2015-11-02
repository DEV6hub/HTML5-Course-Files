function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.src = 'Images/html5-structures.png';
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
}