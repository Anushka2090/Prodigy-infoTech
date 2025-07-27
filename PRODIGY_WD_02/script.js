let startTime;
let interval;
let running = false;
let lapCount = 0;

function start() {
  if (!running) {
    startTime = Date.now() - (startTime ? (Date.now() - startTime) : 0);
    interval = setInterval(updateDisplay, 10);
    running = true;
  }
}

function pause() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").textContent = "00:00:00.000";
  document.getElementById("lapsList").innerHTML = "";
  startTime = null;
  lapCount = 0;
  running = false;
}

function lap() {
  if (running) {
    const elapsed = Date.now() - startTime;

    const milliseconds = elapsed % 1000;
    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const hours = Math.floor(elapsed / (1000 * 60 * 60));

    const formattedLap =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0") + "." +
      String(milliseconds).padStart(3, "0");

    const lapItem = document.createElement("li");
    lapItem.textContent = formattedLap;
    document.getElementById("lapsList").appendChild(lapItem);
  }
}

function updateDisplay() {
  const elapsed = Date.now() - startTime;

  const milliseconds = elapsed % 1000;
  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const hours = Math.floor(elapsed / (1000 * 60 * 60));

  const formattedTime =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    String(milliseconds).padStart(3, "0");

  document.getElementById("display").textContent = formattedTime;
}
