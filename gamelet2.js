/* Code Values: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values */

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionX = 0;
let positionY = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionX = positionX - 5;
  }
  if (e.code === "ArrowRight") {
    positionX = positionX + 5;
  }
  if (positionX < 0) {
    positionX = 0;
  }

  if (e.code === "ArrowUp") {
    positionY = positionY - 5;
  }
  if (e.code === "ArrowDown") {
    positionY = positionY + 5;
  }
  if (positionY < 0) {
    positionY = 0;
  }
  refresh();
}

function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}
