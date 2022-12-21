import "./styles.css";

var container = document.getElementById("container");
var P_width = window.innerWidth;
var P_height = window.innerHeight;

// container.addEventListener("mouseover", function (event) {
//   var boxAttr = container.getBoundingClientRect();
//   console.log("pointing to box");
// });

window.addEventListener("resize", function () {
  P_width = window.innerWidth;
  P_height = window.innerHeight;
});

container.addEventListener("mouseover", function () {
  var boxAttr = container.getBoundingClientRect();
  var pos = getNewPosition(boxAttr.height, boxAttr.width);
  container.style.top = pos.y + "px";
  container.style.left = pos.x + "px";
});

function getNewPosition(c_height, c_width) {
  var newY = Math.floor(Math.random() * P_height + 1 - c_height);
  var newX = Math.floor(Math.random() * P_width + 1 - c_width);

  if (newX < 0) {
    newX = 0;
  }
  if (newY < 0) {
    newY = 0;
  }
  return { y: newY, x: newX };
}
