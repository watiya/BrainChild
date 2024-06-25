var toggle = document.getElementById("autoToggle");
var inst = document.getElementById("instructions");
var wrapper = document.getElementById("cardWrapper");
var card = document.getElementById("card");
var images = card.getElementsByTagName("img");

function rotate(event) {
  var x = event.clientX;
  var y = event.clientY;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var midpointX = w / 2;
  var midpointY = h / 2;
  var ypos = x - midpointX;
  var xpos = y - midpointY;
  var yval = ypos / midpointX * 20;
  var xval = xpos / midpointY * 20;
  var card = document.getElementById("card");
  card.style.transform =
    "perspective(550px) rotateY(" + yval + "deg) rotateX(" + xval + "deg)";

  for (var i = 1; i < images.length; ++i) {
    var myImg = images[i];
    myImg.style =
      "transform: perspective(550px) translateZ(" +
      myImg.getAttribute("data-depth") / myImg.clientHeight * 5000 +
      "px); left: " +
      yval * myImg.getAttribute("data-depth") * -1 / 20 +
      "%; top: " +
      xval * myImg.getAttribute("data-depth") / 20 +
      "%;";
  }
}
document.addEventListener(
  "mousemove",
  function(event) {
    if (!wrapper.classList.contains("auto")) {
      rotate(event);
    }
  },
  false
);

autoToggle.addEventListener("click", function() {
  if (!wrapper.classList.contains("auto")) {
    wrapper.classList.add("auto");
    toggle.innerHTML = "Click for pointer control";
    inst.innerHTML = "AUTO ANIMATION";
  } else {
    wrapper.classList.remove("auto");
    toggle.innerHTML = "Click for auto animation";
    inst.innerHTML = "POINTER CONTROL";
  }
});