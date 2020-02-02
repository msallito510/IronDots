const dotsBckG = [
  { background: "#6ba539" },
  { background: "#a53939" },
  { background: "#a5a539" },
  { background: "#3964a5" },
  { background: "#4405fc" },
  { background: "#91fcfe" },
  { background: "#565B73" },
  { background: "#f79533" }
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

  // <---Start button--->
  startBtn = document.getElementById("start");
  restartBtn = document.getElementById("restart");

  startBtn.addEventListener("click", start);
  restartBtn.addEventListener("click", restart);

  function restart() {
    location.reload();
  }

  function printGameOver() {
    setAllDotsInScreen("");
    frameBox = document.getElementById("frameBox");
    gameOver = document.getElementById("gameover");
    displayDotMatched = document.getElementById("player_score_GameOver");
    restart = document.getElementById("restart");

    frameBox.style = "background: transparent";
    gameOver.style = "display: block";
    restart.style = "diplay: block";
    displayDotMatched.textContent = dotsGame.dotMatched;
  }

  function start() {
    cleanScreen();

    timerStart();

    let html = shuffleDots(levelGame);

    setAllDotsInScreen(html);

    selectDots();
  }

  function regenerateGame() {
    setFrame();

    let html = shuffleDots(levelGame);

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

  function timerStart() {
    const timerPlaceholder = document.getElementById("count_down");

    let countDown = function() {
      if (timerPlaceholder.textContent <= 0) {
        clearInterval(myTime);
        // show score and see if the challenge is done
        challengeGame();
      } else {
        timerPlaceholder.textContent = timerPlaceholder.textContent - 1;
      }
    };

    var myTime = setInterval(countDown, 1000);
  }

  function challengeGame() {
    totalScore = dotsGame.dotMatched;

    if (totalScore < 2) {
      printGameOver();
    } else {
      levelGame++;
      start();
    }
  }

  function shuffleDots(level) {
    idxHtml = 0;
    html = "";
    setFrame();

    switch (level) {
      case 1:
        dotsGame.shuffleDots(4).forEach(el => {
          if (idxHtml < 4) {
            html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
              el.background
            }'></div>`;
          }
        });
        break;
      case 2:
        dotsGame.shuffleDots(8).forEach(el => {
          html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
            el.background
          }'></div>`;
        });
        break;
      default:
        throw new console.error();
    }

    return `<div class='dotGameContent'>${html}</div>`;
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
    displayDotMatched = document.getElementById("player_score");

    frameBox.style = "display: block";
    displayScore.style = "display: block; margin: 20px;";
    displayCountDown.style = "display: block; margin: 20px;";
    displayDotMatched.textContent = dotsGame.dotMatched;
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
              alert("well done!");

              regenerateGame();
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
