const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const startTimer = document.querySelector(".start");
const backwardBtn = document.getElementById("backward");
const progressBar = document.getElementById("range");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;

  progressBar.value = progressPercent;
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedTime = padNumber(minutes) + ":" + padNumber(seconds);

  startTimer.textContent = formattedTime;
});

function padNumber(number) {
  return number.toString().padStart(2, "0");
}

let currentPage = localStorage.getItem("currentPage") || "index";

document.getElementById("forward").addEventListener("click", function() {
  if (currentPage === "seis") {
    currentPage = "index";
  } else {
    currentPage = getNextPage(currentPage);
  }
  localStorage.setItem("currentPage", currentPage);
  window.location.href = currentPage + ".html";
});

document.getElementById("backward").addEventListener("click", function() {
  if (currentPage === "index") {
    currentPage = "seis";
  } else {
    currentPage = getPreviousPage(currentPage);
  }
  localStorage.setItem("currentPage", currentPage);
  window.location.href = currentPage + ".html";
});

function getNextPage(current) {
  switch (current) {
    case "index":
      return "uno";
    case "uno":
      return "dos";
    case "dos":
      return "tres";
    case "tres":
      return "cuatro";
    case "cuatro":
      return "cinco";
    case "cinco":
      return "seis";
    default:
      return "index";
  }
}

function getPreviousPage(current) {
  switch (current) {
    case "index":
      return "seis";
    case "uno":
      return "index";
    case "dos":
      return "uno";
    case "tres":
      return "dos";
    case "cuatro":
      return "tres";
    case "cinco":
      return "cuatro";
    case "seis":
      return "cinco";
    default:
      return "index";
  }
}