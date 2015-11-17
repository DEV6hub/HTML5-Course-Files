var formFieldCount = 0;
var formFieldsCompleted = 0;
if (window.addEventListener) {
  window.addEventListener("load", false);
}

function setFormDates() {
  var dateFieldTypes = ["date", "datetime", "datetime-local", "time", "month", "week"];
  var myForm = document.getElementById("my-form");
  var field;
  var currentDate = new Date();
  var formFieldCount = 0;
    //updateProgress();
    for (var i = 0; i < myForm.elements.length; ++i) {
      field = myForm.elements[i];
      formFieldCount++;
      switch (field.type) {
        case "date" :
        field.value = currentDate.format("yyyy-mm-dd", true);
        break;
        case "datetime" :
        field.value = currentDate.format("yyyy-mm-dd'T'HH:MM'Z'", true);
        break;
        case "datetime-local" :
        field.value = currentDate.format("yyyy-mm-dd'T'HH:MM");
        break;
        case "time" :
        field.value = currentDate.format("HH:MM", true);
        break;
        case "month" :
        field.value = currentDate.format("yyyy-mm", true);
        break;
        case "week" :
        field.value = currentDate.format("yyyy-'W'w");
        break;
        case "range" :
        document.getElementById(field.id + "output").innerHTML = field.value;
        field.addEventListener("change", function () {
          document.getElementById(this.id + "output").innerHTML = this.value;
        }, false);
        case undefined :
        break;
        formFieldCount--;
        default :
      }
    }
  }

  function updateProgress() {
    var progressBar = document.getElementById("progress-bar");
    progressBar.max = formFieldCount;
    progressBar.value = formFieldsCompleted;
  }