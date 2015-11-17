var formFieldCount = 0;
var formFieldsCompleted = 0;
if (window.addEventListener) {
  window.addEventListener("load", addLoadEvents, false);
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
    case "date":
      field.value = currentDate.format("yyyy-mm-dd", true);
      break;
    case "datetime":
      field.value = currentDate.format("yyyy-mm-dd'T'HH:MM'Z'", true);
      break;
    case "datetime-local":
      field.value = currentDate.format("yyyy-mm-dd'T'HH:MM");
      break;
    case "time":
      field.value = currentDate.format("HH:MM", true);
      break;
    case "month":
      field.value = currentDate.format("yyyy-mm", true);
      break;
    case "week":
      field.value = currentDate.format("yyyy-'W'w");
      break;
    case "range":
      document.getElementById(field.id + "output").innerHTML = field.value;
      field.addEventListener("change", function () {
        document.getElementById(this.id + "output").innerHTML = this.value;
      }, false);
    case undefined:
      break;
      formFieldCount--;
    default:
      // if (Modernizr.input.placeholder) {
      //     field.placeholder = "enter valid " + field.type;
      // } else if (field.value.length == 0) {
      //     field.value = "enter valid " + field.type;
      //     field.style.opacity = .5;
      //     field.addEventListener("focus", function () {
      //         this.style.opacity = 1;
      //         if (this.value == "enter valid " + this.type) {
      //             this.value = "";
      //         }
      //     }, false);
      // }
      // field.addEventListener("blur", function () {
      //     if (Modernizr.input.validity && !this.validity.valid) {
      //         this.value = "enter valid " + this.type;
      //         if (!Modernizr.input.placeholder) {
      //             this.style.opacity = .5;
      //         }
      //     } else if (!Modernizr.input.placeholder) {
      //         this.style.opacity = 1;
      //     }
      // }, false);
    }
  }
  //myForm.addEventListener("formchange",updateProgress,false);
}

function updateProgress() {
  var progressBar = document.getElementById("progress-bar");
  progressBar.max = formFieldCount;
  progressBar.value = formFieldsCompleted;
}