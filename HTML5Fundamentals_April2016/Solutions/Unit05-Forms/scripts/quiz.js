if (window.addEventListener) {
  window.addEventListener("load", addLoadEvents, false);
}

function addLoadEvents() {
  document.getElementById('quiz').addEventListener("change", function () {
    updateMeasures();
  }, false);
}

function updateMeasures() {
  var questions = document.getElementsByTagName("input");
  var numQuestions = questions.length;
  var numAnswers = 0;
  var numCorrectAnswers = 0;
  var answers = ["#ff9300", "23", "99+9/9", "1963-11-22", "http://www.google.com"];
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