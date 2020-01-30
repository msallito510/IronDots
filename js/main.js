const dotsBckG = [
  { background: "#6ba539" },
  { background: "#a53939" },
  { background: "#a5a539" },
  { background: "#3964a5" }
];

/*
en frameBox
display: flex;
    justify-content: center;
    width: 470px;
    flex-wrap: wrap;
    align-items: flex-start;
    */

const dotsGame = new Game(dotsBckG);

document.addEventListener("DOMContentLoaded", event => {
  let levelGame = 1;

  initPage();

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

    setLevelGame(levelGame);

    setFrame();

    setAllDotsInScreen(html);

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
    html = "";

    switch (level) {
      case 1:
        dotsGame.shuffleDots().forEach(el => {
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
    displayScore = document.getElementById("score");
    displayCountDown = document.getElementById("countDown");

    frameBox.style = "display: block";
    displayScore.style = "display: block; margin: 20px;";
    displayCountDown.style = "display: block; margin: 20px;";
  }

  function setAllDotsInScreen(html) {
    document.querySelector("#frameBox").innerHTML = html;
  }

  function selectDots() {
    selectNodes = document.getElementsByClassName("dotGame");
    selectedItemList = [];

    for (i = 0; i < selectNodes.length; i++) {
      selectNodes[i].onclick = function(e) {
        selectedItemList.push({
          id: e.toElement.id,
          colour: e.toElement.style.background
        });

        if (selectedItemList.length > 1) {
          if (
            !dotsGame.areTheSameNode(selectedItemList[0], selectedItemList[1])
          ) {
            if (dotsGame.checkforSameColour(selectedItemList)) {
              // levelGame++;
              alert("well done!");
              start();
            }
          } else {
            alert("ey! it's the same dot!");
          }
          selectedItemList = [];
        }
        console.log(selectedItemList);
      };
    }
  }
});
