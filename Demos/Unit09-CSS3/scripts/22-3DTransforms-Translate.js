window.addEventListener('load', function () {
  document.getElementById('resetBtn').addEventListener('click', doReset);
  document.getElementById('perspective').addEventListener('change', updateParentPerspective);
  document.getElementById('translateX').addEventListener('change', updateChildTranslation);
  document.getElementById('translateY').addEventListener('change', updateChildTranslation);
  document.getElementById('translateZ').addEventListener('change', updateChildTranslation);
});

function updateParentPerspective(event) {
  var targetValue = document.getElementById(event.target.id).value;
  document.getElementById(event.target.id+'OT').innerHTML = targetValue;
  document.getElementById(event.target.id+'OD').innerHTML = targetValue;
  document.getElementById('parentBox').style['webkitPerspective']=targetValue+'px';
}


function updateChildTranslation(event) {
  if (event.target.type == 'range') {
    var xOutput = document.getElementById('translateXO');
    var xOutputT = document.getElementById('translateXOT');
    var yOutput = document.getElementById('translateYO');
    var yOutputT = document.getElementById('translateYOT');
    var zOutput = document.getElementById('translateZO');
    var zOutputT = document.getElementById('translateZOT');

    var xValue = document.getElementById('translateX').value;
    var yValue = document.getElementById('translateY').value;
    var zValue = document.getElementById('translateZ').value;

    xOutput.innerHTML = xValue;
    xOutputT.innerHTML = xValue;
    yOutput.innerHTML = yValue;
    yOutputT.innerHTML = yValue;
    zOutput.innerHTML = zValue;
    zOutputT.innerHTML = zValue;


    var styleValue = 'translateX(' + xValue + 'px) translateY(' + yValue + 'px) translateZ(' + zValue + 'px)';
//var styleValue = 'translate3d(' + xValue + 'px, ' + yValue + 'px, ' + zValue + 'px)';

document.getElementById('childBox').style['webkitTransform'] = styleValue;
}
}

function doReset() {
  document.getElementById('perspective').value = 500;
  document.getElementById('translateX').value = 10;
  document.getElementById('translateY').value = 10;
  document.getElementById('translateZ').value = 10;
}