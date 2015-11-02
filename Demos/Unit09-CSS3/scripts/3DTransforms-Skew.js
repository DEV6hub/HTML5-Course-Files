window.addEventListener('load', function () {
  document.getElementById('resetBtn').addEventListener('click', doReset);
  document.getElementById('perspective').addEventListener('change', updateParentPerspective);
  document.getElementById('skewX').addEventListener('change', updateChildSkew);
  document.getElementById('skewY').addEventListener('change', updateChildSkew);

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


function updateChildSkew(event) {
  if (event.target.type == 'range') {
    var xOutput = document.getElementById('skewXO');
    var xOutputT = document.getElementById('skewXOT');
    var yOutput = document.getElementById('skewYO');
    var yOutputT = document.getElementById('skewYOT');

    var xValue = document.getElementById('skewX').value;
    var yValue = document.getElementById('skewY').value;

    xOutput.innerHTML = xValue;
    xOutputT.innerHTML = xValue;
    yOutput.innerHTML = yValue;
    yOutputT.innerHTML = yValue;

    document.getElementById('childBox').style['webkitTransform'] = 'skew(' + xValue + 'deg ,' + yValue + 'deg)';
//    document.getElementById('childBox').style['webkitTransform'] = 'skewX(' + xValue + 'deg) skewY(' + yValue + 'deg)';
}
}

function doReset() {
  document.getElementById('perspective').value = 500;

  document.getElementById('transformOriginX').value = 50;
  document.getElementById('transformOriginY').value = 50;

  document.getElementById('skewX').value = 10;
  document.getElementById('skewY').value = 10;
  document.getElementById('preserve3d').value = 1;
}
