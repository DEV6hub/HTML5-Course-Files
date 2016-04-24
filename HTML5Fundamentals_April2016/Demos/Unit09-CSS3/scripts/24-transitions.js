window.addEventListener('load', function () {
  document.getElementById('durationSeconds').addEventListener('change', updateStyles);
  document.getElementById('delaySeconds').addEventListener('change', updateStyles);
  document.getElementById('easingFunction').addEventListener('change', updateStyles);
});

function updateStyles(event) {

  var targetOutput = event.target.id+'O';
  var targetValue = document.getElementById(event.target.id).value;

  var easingFunction = document.getElementById('easingFunction').value;
  var durationSeconds = document.getElementById('durationSeconds').value;
  var delaySeconds = document.getElementById('delaySeconds').value;

  var transitionStyleValue       = 'margin-left ' + durationSeconds + 's ' + easingFunction + ' ' + delaySeconds + 's';
  var transitionRule             = '-webkit-transition: ' + transitionStyleValue + '; ';

  document.getElementById(targetOutput).innerHTML = targetValue;
  document.getElementById('styleRule').innerHTML = '<code><pre>.transitionable { ' + transitionRule + '}</pre></code>';
  document.getElementById('p2').setAttribute('style', transitionRule);
}