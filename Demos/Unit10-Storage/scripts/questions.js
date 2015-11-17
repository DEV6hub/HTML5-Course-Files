window.addEventListener("load", updateList, false);

var prefix = "q-";

function updateList() {
  var questions = "<ol>";
  for (var i = 0; i < localStorage.length; ++i) {
    if (localStorage.key(i).substring(0, prefix.length) == prefix) {
      questions += "<li>" + localStorage.key(i).substring(prefix.length) + " <img onclick=\"showAnswer('" + localStorage.key(i) + "')\" src='Images/find.png'> <img onclick=\"deleteQuestion('" + localStorage.key(i) + "')\" src='Images/delete.png'></li>";
    }
  }
  questions += "</ol>";
  document.getElementById("questions").innerHTML = questions;
}

function save() {
  var q = prefix + document.getElementById("q").value;
  var a = document.getElementById("a").value;
  localStorage.setItem(q, a);
  document.getElementById("q").value = "";
  document.getElementById("a").value = "";
  document.getElementById("q").focus();
  updateList();
}

function revealLocalStorage() {
  var questions = "<ol>";
  for (var i = 0; i < localStorage.length; ++i) {
    questions += "<li>" + localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i)) + "</li>";
  }
  questions += "</ol>";
  document.getElementById("questions").innerHTML = questions;
}

function showAnswer(key) {
  alert(localStorage.getItem(key));
}

function deleteQuestion(key) {
  if (!confirm("Are you sure you want to delete this question?")) return;
  localStorage.removeItem(key);
  updateList();
}

function deleteQuestions() {
  if (!confirm("Are you sure you want to delete all questions?")) return;

  var numItems = localStorage.length;
  for (var i = numItems - 1; i >= 0; --i) {
    if (localStorage.key(i).substring(0, prefix.length) == prefix) {
      localStorage.removeItem(localStorage.key(i));
    }
  }
  updateList();
}