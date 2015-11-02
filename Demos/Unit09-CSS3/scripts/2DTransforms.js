  window.addEventListener('load', function () {
   document.getElementById('skewDegrees').addEventListener('change', updateDivStyles);
   document.getElementById('scaleX').addEventListener('change', updateDivStyles);
   document.getElementById('scaleY').addEventListener('change', updateDivStyles);
   document.getElementById('rotateDegrees').addEventListener('change', updateDivStyles);
   document.getElementById('translateX').addEventListener('change', updateDivStyles);
   document.getElementById('translateY').addEventListener('change', updateDivStyles);
   document.getElementById('originX').addEventListener('change', updateDivStyles);
   document.getElementById('originY').addEventListener('change', updateDivStyles);
   document.getElementById('resetBtn').addEventListener('click', doReset);
 });

  function updateDivStyles(event) {

   var prefixW = '-webkit-';
   var prefixM = '-moz-';
   var prefixO = '-o-';
   var prefixI = '-ms-';

   var targetOutput = event.target.id+'O';
   var targetValue = document.getElementById(event.target.id).value;

   var skewDegrees = document.getElementById('skewDegrees').value;
   var scaleX = document.getElementById('scaleX').value;
   var scaleY = document.getElementById('scaleY').value;
   var rotateDegrees = document.getElementById('rotateDegrees').value;
   var translateX = document.getElementById('translateX').value;
   var translateY = document.getElementById('translateY').value;
   var originX = document.getElementById('originX').value;
   var originY = document.getElementById('originY').value;

   var transformStyleValue  = 'skew(' + skewDegrees + 'deg) ';
   transformStyleValue += 'scale(' + scaleX + ', ' + scaleY + ') ';
   transformStyleValue += 'rotate(' + rotateDegrees + 'deg) ';
   transformStyleValue += 'translate(' + translateX + 'px, ' + translateY + 'px)';
   var baseTransformRule          = 'transform: ' + transformStyleValue + '; ';
   var  webkitTransformRule         = prefixW + 'transform: ' + transformStyleValue + '; ';
   var  mozTransformRule            = prefixM + 'transform: ' + transformStyleValue + '; ';
   var operaTransformRule           = prefixO + 'transform: ' + transformStyleValue + '; ';
   var ieTransformRule            = prefixI + 'transform: ' + transformStyleValue + '; ';
   var transformStyleRuleToApply  = baseTransformRule + webkitTransformRule + mozTransformRule + operaTransformRule + ieTransformRule;

   var transformOriginStyleValue      = originX + '% ' + originY + '%';
   var baseTransformOriginRule        = 'transform-origin: ' + transformOriginStyleValue + '; ';
   var  webkitTransformOriginRule       = prefixW + 'transform-origin: ' + transformOriginStyleValue + '; ';
   var  mozTransformOriginRule          = prefixM + 'transform-origin: ' + transformOriginStyleValue + '; ';
   var operaTransformOriginRule         = prefixO + 'transform-origin: ' + transformOriginStyleValue + '; ';
   var ieTransformOriginRule          = prefixI + 'transform-origin: ' + transformOriginStyleValue + '; ';
   var transformOriginStyleRuleToApply  = baseTransformOriginRule + webkitTransformOriginRule + mozTransformOriginRule + operaTransformOriginRule + ieTransformOriginRule;

   var styleRuleToDisplay = '<code><pre>' + baseTransformRule + '<br>' + baseTransformOriginRule + '</pre></code>';
   var styleRuleToApply = transformStyleRuleToApply + transformOriginStyleRuleToApply;


   document.getElementById(targetOutput).innerHTML = targetValue;
   document.getElementById('styleRule').innerHTML = styleRuleToDisplay;
   document.getElementById('transformed').setAttribute('style', styleRuleToApply);
 }

 function doReset() {
   document.getElementById('skewDegrees').value = 0;
   document.getElementById('scaleX').value = 0;
   document.getElementById('scaleY').value = 0;
   document.getElementById('rotateDegrees').value = 0;
   document.getElementById('translateX').value = 0;
   document.getElementById('translateY').value = 0;
   document.getElementById('originX').value = 0;
   document.getElementById('originY').value = 0;
 }