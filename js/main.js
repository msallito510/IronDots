document.addEventListener("DOMContentLoaded", event => {
  getDots();

  function printGameOver() {
    cleanScreen();

    gameOver = document.getElementById("gameover");
    gameOver.style = "display: block";
  }

  function start() {
    // game.start();
    cleanScreen();
    getDots();
  }

  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", start);

  //######### FUNCTION SECTION ###############
  //##########################################

  function cleanScreen() {
    titleDot = document.getElementById("titleDot");
    dotsInit = document.getElementById("dots");
    menu = document.getElementById("menu");

    titleDot.style = "display: none";
    // dotsInit.style = "display: none";
    menu.style = "display: none";
  }

  function setFrame() {
    frameBox = document.getElementById("frameBox");
    frameBox.style = "display: block";
  }

  function getDots() {
    dotChild = document.querySelectorAll(".dot");
    dotChild.forEach(function(d, idx) {
      d.classList.add("dotClass", "dotClass-" + idx);
    });
  }

  // game = new Game(
  //   {
  //     ctx,
  //     rows: canvas.width / widthCell,
  //     columns: canvas.height / widthCell,
  //     maxCells: widthCell,
  //     snake: new Snake(canvas.width / widthCell, canvas.height / widthCell)
  //   },
  //   printGameOver
  // );
});
