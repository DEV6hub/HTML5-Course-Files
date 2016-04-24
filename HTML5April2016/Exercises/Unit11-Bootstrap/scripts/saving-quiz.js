window.addEventListener("load", addLoadEvents, false);

var prefix = "quiz-";
var dateMask = "yyyy-mm-dd H:MM:ss";

function addLoadEvents() {
  document.getElementById('quiz').addEventListener("change", function () {
    updateMeasures();
  }, false);
  var questions = document.getElementById("quiz").getElementsByTagName("input");
  for (var i = 0; i < questions.length; ++i) {
    questions[i].addEventListener("change", function () {
      sessionStorage.setItem(prefix + this.id, this.value);
    }, false);
  }
  document.getElementById("save").addEventListener("click", saveAnswers, false);
  refill();
}

function saveAnswers() {
  var questions = document.getElementById("quiz").getElementsByTagName("input");
  for (var i = 0; i < questions.length; ++i) {
    localStorage.setItem(prefix + questions[i].id, questions[i].value);
  }
}

function refill() {
  var fillFrom = hasAnswers();
  if (!fillFrom) return;
  var confirmed = false;
  var msg = "It appears you have already started with the quiz. Would you like to continue from where you left off? (" + fillFrom + ")";
  var questions = document.getElementById("quiz").getElementsByTagName("input");
  for (var i = 0; i < questions.length; ++i) {
    if (!confirmed && !confirm(msg)) {
      deleteAnswers();
      return;
    }
    confirmed = true;
    if (fillFrom == "session") {
      questions[i].value = sessionStorage.getItem(prefix + questions[i].id) || "";
      //We need the || "" for IE, which returns null if the key is not found.
    } else { //fillFrom == "local"
      questions[i].value = localStorage.getItem(prefix + questions[i].id) || "";
      sessionStorage.setItem(prefix + questions[i].id, questions[i].value);
    }
  }
  updateMeasures();
}

function hasAnswers() {
  var numItems = sessionStorage.length;
  for (var i = 0; i < numItems; ++i) {
    if (sessionStorage.key(i).substring(0, prefix.length) == prefix) {
      return "session";
    }
  }
  numItems = localStorage.length;
  for (i = 0; i < numItems; ++i) {
    if (localStorage.key(i).substring(0, prefix.length) == prefix) {
      return "local";
    }
  }
  return false;
}

function deleteAnswers() {
  var numItems = sessionStorage.length;
  for (var i = numItems - 1; i >= 0; --i) {
    if (sessionStorage.key(i).substring(0, prefix.length) == prefix) {
      sessionStorage.removeItem(sessionStorage.key(i));
    }
  }
  numItems = localStorage.length;
  for (var i = numItems - 1; i >= 0; --i) {
    if (localStorage.key(i).substring(0, prefix.length) == prefix) {
      localStorage.removeItem(localStorage.key(i));
    }
  }
}

function updateMeasures() {
  var questions = document.getElementsByTagName("input");
  var numQuestions = questions.length;
  var numAnswers = 0;
  var numCorrectAnswers = 0;
  var answers = ["orange", "23", "99+9/9", "1963-11-22", "http://www.google.com"];
  for (var i = 0; i < numQuestions; i++) {
    if ((!questions[i].validity || questions[i].validity.valid) && questions[i].value.length > 0) {
      numAnswers++;
    }
    if (questions[i].value == answers[i]) {
      numCorrectAnswers++;
    }
  }
  var progress = Math.round(numAnswers / numQuestions * 100);
  var score = Math.round(numCorrectAnswers / numQuestions * 100);
  document.getElementById("quiz-progress").value = progress;
  document.getElementById("quiz-progress").getElementsByTagName("span")[0].innerHTML = progress;
  document.getElementById("quiz-success").value = score;
  document.getElementById("quiz-success").getElementsByTagName("span")[0].innerHTML = score;
}