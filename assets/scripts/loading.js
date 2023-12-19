const loading = document.getElementById("loading");
const loadingBar = document.getElementById("bar");

let loadingCount = Math.round(Math.random() * 3 + 2);
let loadingRate = 100 / loadingCount;
let loadingStep = 0;

let timeInterval = 500;

let loadingAnimation = window.setInterval(() => {
  loadingStep++;
  loadingBar.style.width = `${loadingRate * loadingStep}%`;
}, timeInterval);

window.setTimeout(() => {
  window.clearInterval(loadingAnimation);
  loading.remove();
}, timeInterval * (loadingCount + 1));
