window.addEventListener("load", function () {
  document.getElementById("my-form").addEventListener("change", showProgress, false);
}, false);

function showProgress() {
  var formInputs = [
  document.getElementById("fname"),
  document.getElementById("lname"),
  document.getElementById("uname"),
  document.getElementById("password")
  ];
  var numComplete = 0;

  for (var i = 0; i < formInputs.length; ++i) {
    if (formInputs[i].value.length > 0) numComplete++;
  }

  var formProgress = document.getElementById("form-progress");

  formProgress.value = numComplete;

  var percentComplete = Math.round(numComplete / formInputs.length * 100);
  formProgress.getElementsByTagName("span")[0].innerHTML = percentComplete;
}