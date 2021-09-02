const container = document.getElementById("container");
const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
const SQUARES = 1000;
let score = 0;
for (let i = 0; i < SQUARES; i++) {
  // Create square,  adds the class 'square' to it and appends to the container
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", (e) => {
    if (
      document.elementFromPoint(e.pageX, e.pageY) === e.target &&
      e.target.style.background == "red"
    ) {
      score = score - 1500;
    }
    setColor(square);
  });
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

setInterval(() => {
  randomLine();
  randomLine();
  randomLine();
  randomLine();
  randomLine();
  randomLine();
}, getRandomNum(200, 700));

function randomLine() {
  let line = getRandomNum();
  let firstSquare = document.querySelectorAll(".square")[line];
  setColor(firstSquare, "red");
  setTimeout(() => removeColor(firstSquare), 1100);
  let i = 0;
  setInterval(() => {
    i++;
    if (i < 49) {
      let squareLine = document.querySelectorAll(".square")[line + i * 20];
      setColor(squareLine, "red");
      setTimeout(() => {
        removeColor(squareLine);
      }, 400);
    }
  }, 200);
}

function setColor(element, colorParam = getRandomColor()) {
  const color = colorParam;
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  if (element.style.background != "red") {
    score += 45;
    document.getElementById("score").innerText = score;
  }
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}
function getRandomNum(min = 0, max = 19) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
