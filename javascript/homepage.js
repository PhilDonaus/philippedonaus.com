function unfold() {
  var top = document.getElementById("top");
  var bottom = document.getElementById("bottom");
  var circle = document.getElementById("circle");
  var information = document.getElementById("information");
  
  if (information.classList.contains("visable")) {
    information.classList.replace("visable","invisable")
  }
  else {
    information.classList.replace("invisable","visable");
  }
  top.classList.toggle("open-top");
  bottom.classList.toggle("open-bottom");
  circle.classList.toggle("open-and-shrink");
}

function fold() {
  var top = document.getElementById("top");
  var bottom = document.getElementById("bottom");
  var circle = document.getElementById("circle");
  var information = document.getElementById("information");

  top.classList.remove("open-top");
  bottom.classList.remove("open-bottom");
  circle.classList.remove("open-and-shrink");
  information.classList.replace("visable","invisable");
  
}