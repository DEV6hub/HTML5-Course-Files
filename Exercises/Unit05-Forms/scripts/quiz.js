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
            var answers = ["orange", "23", "99+9/9", "1963-11-22", "http://www.google.com"];
            //finish this function
        }