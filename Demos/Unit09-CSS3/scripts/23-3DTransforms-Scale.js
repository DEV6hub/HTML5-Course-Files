  window.addEventListener('load', function () {
   document.getElementById('resetBtn').addEventListener('click', doReset);
   document.getElementById('perspective').addEventListener('change', updateParentPerspective);
   document.getElementById('scaleX').addEventListener('change', updateChildScale);
   document.getElementById('scaleY').addEventListener('change', updateChildScale);
   document.getElementById('scaleZ').addEventListener('change', updateChildScale);

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


 function updateChildScale(event) {
   if (event.target.type == 'range') {
    var xOutput = document.getElementById('scaleXO');
    var xOutputT = document.getElementById('scaleXOT');
    var yOutput = document.getElementById('scaleYO');
    var yOutputT = document.getElementById('scaleYOT');
    var zOutput = document.getElementById('scaleZO');
    var zOutputT = document.getElementById('scaleZOT');

    var xValue = document.getElementById('scaleX').value / 10;
    var yValue = document.getElementById('scaleY').value / 10;
    var zValue = document.getElementById('scaleZ').value / 10;

    xOutput.innerHTML = xValue;
    xOutputT.innerHTML = xValue;
    yOutput.innerHTML = yValue;
    yOutputT.innerHTML = yValue;
    zOutput.innerHTML = zValue;
    zOutputT.innerHTML = zValue;

    document.getElementById('childBox').style['webkitTransform'] = 'scaleX(' + xValue + ') scaleY(' + yValue + ')  scaleZ(' + zValue + ')';
  }
}

function doReset() {
  document.getElementById('perspective').value = 500;

  document.getElementById('transformOriginX').value = 50;
  document.getElementById('transformOriginY').value = 50;

  document.getElementById('scaleX').value = 10;
  document.getElementById('scaleY').value = 10;
  document.getElementById('scaleZ').value = 10;
}
