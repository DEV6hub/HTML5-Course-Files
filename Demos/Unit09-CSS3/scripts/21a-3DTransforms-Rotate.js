window.addEventListener('load', function () {
 document.getElementById('resetBtn').addEventListener('click', doReset);
 document.getElementById('perspective').addEventListener('change', updateParentPerspective);
 document.getElementById('rotateX').addEventListener('change', updateChildRotation);
 document.getElementById('rotateY').addEventListener('change', updateChildRotation);
 document.getElementById('rotateZ').addEventListener('change', updateChildRotation);
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
  var xOutput = document.getElementById('rotateXO');
  var xOutputT = document.getElementById('rotateXOT');
  var yOutput = document.getElementById('rotateYO');
  var yOutputT = document.getElementById('rotateYOT');
  var zOutput = document.getElementById('rotateZO');
  var zOutputT = document.getElementById('rotateZOT');

  var xValue = document.getElementById('rotateX').value;
  var yValue = document.getElementById('rotateY').value;
  var zValue = document.getElementById('rotateZ').value;

  xOutput.innerHTML = xValue;
  xOutputT.innerHTML = xValue;
  yOutput.innerHTML = yValue;
  yOutputT.innerHTML = yValue;
  zOutput.innerHTML = zValue;
  zOutputT.innerHTML = zValue;

  document.getElementById('childBox').style['webkitTransform'] = 'rotateX(' + xValue + 'deg) rotateY(' + yValue + 'deg)  rotateZ(' + zValue + 'deg)';
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

document.getElementById('rotateX').value = 10;
document.getElementById('rotateY').value = 10;
document.getElementById('rotateZ').value = 10;
document.getElementById('backface').value = 1;
document.getElementById('preserve3d').value = 1;
}