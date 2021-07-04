const imageFile = document.querySelector("#my-image");
const imageBox = document.querySelector("#image-box");
const controlBox = document.querySelector(".control-box");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
var root = document.documentElement;

var loadFile = function (event) {
  imageBox.src = URL.createObjectURL(event.target.files[0]);
  imageBox.onload = function () {
    URL.revokeObjectURL(imageBox.src); // free memory
  };
  imageBox.className = "active";
  controlBox.className = "control-box active";
};

var turnLeft = () => {
  style = window.getComputedStyle(imageBox);
  rotateValue = style.getPropertyValue("transform");
  rotateValue = rotateValue.replace("matrix(", "");
  rotateValues = rotateValue.split(" ");
  if (rotateValues[0] == "1,") {
    root.style.setProperty("--degree", "-90deg");
  } else if (rotateValues[0] == "-1,") {
    root.style.setProperty("--degree", "90deg");
  } else if (rotateValues[1] == "-1,") {
    root.style.setProperty("--degree", "-180deg");
  } else if (rotateValues[1] == "1,") {
    root.style.setProperty("--degree", "0deg");
  }
};

var turnRight = () => {
  style = window.getComputedStyle(imageBox);
  rotateValue = style.getPropertyValue("transform");
  rotateValue = rotateValue.replace("matrix(", "");
  rotateValues = rotateValue.split(" ");
  if (rotateValues[0] == "1,") {
    root.style.setProperty("--degree", "90deg");
  } else if (rotateValues[0] == "-1,") {
    root.style.setProperty("--degree", "-90deg");
  } else if (rotateValues[1] == "-1,") {
    root.style.setProperty("--degree", "0deg");
  } else if (rotateValues[1] == "1,") {
    root.style.setProperty("--degree", "180deg");
  }
};
