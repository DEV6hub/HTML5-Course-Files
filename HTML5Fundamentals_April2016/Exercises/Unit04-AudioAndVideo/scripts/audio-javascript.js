var playTimer;

window.addEventListener("load", function () {
  document.getElementById("cmd-play").addEventListener("click", play, false);
  document.getElementById("cmd-pause").addEventListener("click", pause, false);
  document.getElementById("cmd-restart").addEventListener("click", restart, false);
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