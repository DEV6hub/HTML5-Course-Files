window.addEventListener('load', function () {
 document.getElementById('resetBtn').addEventListener('click', doReset);
 document.getElementById('perspective').addEventListener('change', updateParentPerspective);
 document.getElementById('multiplierX').addEventListener('change', updateChildRotation);
 document.getElementById('multiplierY').addEventListener('change', updateChildRotation);
 document.getElementById('multiplierZ').addEventListener('change', updateChildRotation);
 document.getElementById('rotateDeg').addEventListener('change', updateChildRotation);
 document.getElementById('backface').addEventListener('change', updateChildBackface);

 document.getElementById('transformOriginX').addEventListener('change', updateChildTransformOrigin);
 document.getElementById('transformOriginY').addEventListener('change', updateChildTransformOrigin);
});

function updateParentPerspective(event) {
 var targetValue = document.getElementById(event.target.id).value;
 document.getElementById(event.target.id+'OT').innerHTML = targetValue;
 document.getElementById(event.target.id+'OD').innerHTML = targetValue;
 document.getElementById('parentBox').style['webkitPerspective']=targetValue+'px';
}

function updateChildTransformOrigin(event) {

 var xOutputT = document.getElementById('transformOriginXOT');
 var yOutputT = document.getElementById('transformOriginYOT');
 var xValue = document.getElementById('transformOriginX').value+'%';
 var yValue = document.getElementById('transformOriginY').value+'%';

 xOutputT.innerHTML = xValue;
 yOutputT.innerHTML = yValue;

 document.getElementById('childBox').style['webkitTransformOriginX'] = xValue;
 document.getElementById('childBox').style['webkitTransformOriginY'] = yValue;
}


function updateChildRotation(event) {
 if (event.target.type == 'range') {
  var xOutput = document.getElementById('multiplierXO');
  var xOutputT = document.getElementById('multiplierXOT');

  var yOutput = document.getElementById('multiplierYO');
  var yOutputT = document.getElementById('multiplierYOT');

  var zOutput = document.getElementById('multiplierZO');
  var zOutputT = document.getElementById('multiplierZOT');

  var degOutput = document.getElementById('rotateDegO');
  var degOutputT = document.getElementById('rotateDegOT');

  var xValue = document.getElementById('multiplierX').value / 10;
  var yValue = document.getElementById('multiplierY').value / 10;
  var zValue = document.getElementById('multiplierZ').value / 10;
  var degValue = document.getElementById('rotateDeg').value;

  xOutput.innerHTML = xValue;
  xOutputT.innerHTML = xValue;
  yOutput.innerHTML = yValue;
  yOutputT.innerHTML = yValue;
  zOutput.innerHTML = zValue;
  zOutputT.innerHTML = zValue;
  degOutput.innerHTML = degValue;
  degOutputT.innerHTML = degValue;

  document.getElementById('childBox').style['webkitTransform'] = 'rotate3d(' + xValue + ', ' + yValue + ', ' + zValue + ', ' + degValue + 'deg)';
}
}

function updateChildBackface(event) {
var visibilityPropertyValue = document.getElementById('backface').checked ? 'visible' : 'hidden';
document.getElementById('backfaceOT').innerHTML = visibilityPropertyValue;
document.getElementById('childBox').style['webkitBackfaceVisibility'] = visibilityPropertyValue;

}

function doReset() {
document.getElementById('perspective').value = 500;

document.getElementById('transformOriginX').value = 50;
document.getElementById('transformOriginY').value = 50;

document.getElementById('multiplierX').value = 10;
document.getElementById('multiplierY').value = 10;
document.getElementById('multiplierZ').value = 10;
document.getElementById('backface').value = 1;
document.getElementById('preserve3d').value = 1;
}