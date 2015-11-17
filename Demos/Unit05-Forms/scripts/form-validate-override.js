window.addEventListener("load", function () {
  document.getElementById("my-form").addEventListener("submit", validate, false);
}, false);

function validate(e) {
  var myForm = this;
  var errMsg = "";
  if (this.fullname.value.length == 0) {
    errMsg += "\n\t*Full Name must be filled out";
  }
  if (this.email.value.length > 0 && !/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/.test(this.email.value)) {
    errMsg += "\n\t*Email is not valid";
  }
  if (errMsg.length > 0) {
    alert(errMsg);
    e.preventDefault();
  }
}