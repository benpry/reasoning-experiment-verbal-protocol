function startTimer() {
  var timer = document.getElementById("timer");
  timer.innerHTML = `<svg viewbox="-50 -50 100 100" stroke-width="10">
    <circle r="45"></circle>
    <circle r="45" pathlength="1"></circle></svg>`;
  timer.classList.add("countdown");
}

function stopTimer() {
  var timer = document.getElementById("timer");
  timer.innerHTML = "";
  timer.classList.remove("countdown");
}
