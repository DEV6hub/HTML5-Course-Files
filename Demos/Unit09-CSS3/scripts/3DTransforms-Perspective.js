window.addEventListener('load', function () {
    document.getElementById('perspective').addEventListener('change', updateParentPerspective);
    document.getElementById('reset').addEventListener('change', doReset);
  });

  function updateParentPerspective() {
    var targetValue = document.getElementById('perspective').value;
    document.getElementById('perspectiveOD').innerHTML = targetValue;
    document.getElementById(event.target.id+'OD').innerHTML = targetValue;
    document.getElementById('parentBox').style['webkitPerspective']=targetValue+'px';
  }
  function doReset() {
    document.getElementById('parentBox').style['webkitPerspective']='';
  }