const dotsBckG = [
  { background: "#6ba539" },
  { background: "#a53939" },
  { background: "#a5a539" },
  { background: "#3964a5" }
];

const dotsGame = new Game(dotsBckG);

// instanciar a game
// y llamar al método de game necesario game.start()

document.addEventListener("DOMContentLoaded", event => {
  getDots();

  let html = "";
  dotsGame.shuffleDots().forEach(el => {
    html += `<div class="dotGame dotClass" style='background:${el.background}'>`;
    html += `</div>`;
  });

  function printGameOver() {
    cleanScreen();

    gameOver = document.getElementById("gameover");
    gameOver.style = "display: block";
  }

  // <---Start button--->
  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", start);

  function start() {
    cleanScreen();
    setFrame();
    // Add all the divs to the HTML
    document.querySelector("#frameBox").innerHTML = html;

    // dotsGame.start();
    // getDots();
  }

  //######### FUNCTION SECTION ###############
  //##########################################

  function cleanScreen() {
    titleDot = document.getElementById("titleDot");
    dotsInit = document.getElementById("dots");
    menu = document.getElementById("menu");

    titleDot.style = "display: none";
    dotsInit.style = "display: none";
    menu.style = "display: none";
  }

  function setFrame() {
    frameBox = document.getElementById("frameBox");
    frameBox.style = "display: block";
  }

  function getDots() {
    dotChild = document.querySelectorAll(".dot");
    dotChild.forEach(function(d, idx) {
      d.classList.add("dotClass", `dotClass-${idx}`);
    });
  }

  function setDots() {
    dotChild = document.querySelectorAll(".dotGame");
    dotChild.forEach(function(d) {
      d.classList.add("dotClass");
    });
  }
});
