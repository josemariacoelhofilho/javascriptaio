/* 

 Gamelet: a starting point for writing games
 Author: Chris Minnick
 Version: 1.0
 Instructions: 
 Include gamelet.js in an HTML document containing 
 an element with an id of 'ball'.
 The script will detect when the left or right arrow
 key is pressed and will move the ball element accordingly.

 Code Values: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values 

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reppsition the ball
}
/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = position + "px";
}
