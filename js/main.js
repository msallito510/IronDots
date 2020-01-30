const dotsBckG = [
  [
    { background: "#6ba539" },
    { background: "#a53939" },
    { background: "#a5a539" },
    { background: "#3964a5" }
  ],
  [
    { background: "#6ba539" },
    { background: "#a53939" },
    { background: "#a5a539" },
    { background: "#3964a5" }
  ]
];

const dotsGame = new Game(dotsBckG);

// instanciar a game
// y llamar al método de game necesario game.start()

document.addEventListener("DOMContentLoaded", event => {
  let html = "";
  let levelGame = 1;

  initPage();
  setLevelGame(levelGame);

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
    selectDots();
  }

  //##########################################
  //######### FUNCTION SECTION ###############
  //##########################################

  function initPage() {
    dotChild = document.querySelectorAll(".dot");
    dotChild.forEach(function(d, idx) {
      d.classList.add("dotClass", `dotClass-${idx}`);
    });
  }

  function setLevelGame(level) {
    idxHtml = 0;

    switch (level) {
      case 1:
        dotsGame.shuffleDots()[0].forEach(el => {
          html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
            el.background
          }'>`;
          html += `</div>`;
        });
        break;
      case 2:
        dotsGame.shuffleDots()[9].forEach(el => {
          html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
            el.background
          }'>`;
          html += `</div>`;
        });
        break;
      default:
        break;
    }
  }

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

  function selectDots() {
    selectNodes = document.getElementsByClassName("dotGame", "div");
    selectedItemList = [];

    for (i = 0; i < selectNodes.length; i++) {
      selectNodes[i].onclick = function(e) {
        selectedItemList.push({
          id: e.toElement.id,
          colour: e.toElement.style.background
        });
        if (
          selectedItemList.length > 1 &&
          !dotsGame.areTheSameNode(selectedItemList[0], selectedItemList[1])
        ) {
          if (
            dotsGame.checkforSameColour(
              selectedItemList[0].colour,
              selectedItemList[1].colour
            )
          ) {
            alert("You Win the game!");
            dotsGame.setLevelGame(selectedItemList);
            selectedItemList = [];
          }
        }
        console.log(selectedItemList);
      };
    }
  }
});
