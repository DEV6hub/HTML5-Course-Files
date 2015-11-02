  var playTimer;

        window.addEventListener("load", function () {
            document.getElementById("cmd-play").addEventListener("click", play, false);
            document.getElementById("cmd-pause").addEventListener("click", pause, false);
            document.getElementById("cmd-restart").addEventListener("click", restart, false);
            var stanzas = document.getElementById("poem").getElementsByTagName("p");
            for (var i = 0; i < stanzas.length; ++i) {
                insertPlayButton(stanzas[i]);
            }
        }, false);

        function play() {
            document.getElementById("my-audio").play();
            reportTime();
        }

        function reportTime() {
            var curTime = document.getElementById("my-audio").currentTime;
            document.getElementById("play-time").innerHTML = Math.round(curTime);
            playTimer = setTimeout(reportTime, 500);
        }

        function pause() {
            document.getElementById("my-audio").pause();
            if (typeof playTimer != "undefined") {
                clearTimeout(playTimer);
            }
        }

        function restart() {
            document.getElementById("my-audio").currentTime = 0;
            play();
        }

        function insertPlayButton(stanza) {
            var pos = stanza.id.split("-")[1];
            var startHTML = stanza.innerHTML;
            var buttonHTML = "<img src='Images/play.gif' title='Play' onclick='jumpTo(" + pos + ")'><img src='Images/pause.gif' title='Play' onclick='pause()'>";
            stanza.innerHTML = buttonHTML + startHTML;
        }

        function jumpTo(pos) {
            document.getElementById("my-audio").currentTime = pos;
            play();
        }