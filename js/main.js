const dotsBckG = [
  { background: "#00FF00" },
  { background: "#a53939" },
  { background: "#F7FE2E" },
  { background: "#3964a5" },
  { background: "#0404B4" },
  { background: "#91fcfe" },
  { background: "#B4045F" },
  { background: "#f79533" },
  { background: "#4169E1" },
  { background: "#00F5FF" },
  { background: "#00C78C" },
  { background: "#2E8B57" },
  { background: "#8B8B00" },
  { background: "#DAA520" },
  { background: "#8B5A00" },
  { background: "#FFD39B" },
  { background: "#FF7D40" },
  { background: "#FFC1C1" },
  { background: "#D2B48C" },
  { background: "#DC143C" },
  { background: "#FFC0CB" },
  { background: "#8B636C" },
  { background: "#EE3A8C" },
  { background: "#FF69B4" },
  { background: "#CD6090" },
  { background: "#EE7AE9" },
  { background: "#AB82FF" }
];

const dotsGame = new Game(dotsBckG);

document.addEventListener("DOMContentLoaded", event => {
  let levelGame = 1;
  const level1 = 5;
  const level2 = 15;
  const level3 = 30;

  // ===== listener =====
  startBtn = document.getElementById("start");
  restartBtn = document.getElementById("restart");
  instructions = document.getElementById("instruction_lnk");
  references = document.getElementById("reference_lnk");
  closeX = document.getElementById("close");

  startBtn.addEventListener("click", start);
  restartBtn.addEventListener("click", restart);
  instructions.addEventListener("click", instructionMsg);
  references.addEventListener("click", referencesInfo);
  closeX.addEventListener("click", restart);

  // ========================

  function restart() {
    location.reload();
  }

  function printGameOver() {
    dotsGame.gameOverSound();

    setAllDotsInScreen("");
    frameBox = document.getElementById("frameBox");
    gameOver = document.getElementById("gameover");
    displayDotMatched = document.getElementById("player_score_GameOver");
    restart = document.getElementById("restart");
    challengeInfo = document.getElementById("challenge");

    frameBox.style = "background: transparent";
    gameOver.style = "display: block";
    restart.style = "diplay: block";
    challengeInfo.style = "display: none";
    displayDotMatched.textContent = dotsGame.dotMatched;

    dotsGame.playMusic("stop", levelGame);
  }

  function start() {
    setMusicGame();

    cleanScreen();

    showCurrentLevel();

    timerStart();

    initTheGame();
  }

  function initTheGame() {
    setFrame();

    let html = shuffleDots(levelGame);

    setAllDotsInScreen(html);

    selectDots();
  }

  function instructionMsg() {
    cleanScreen();

    setFrame();

    frameClose();

    instructions = document.getElementById("instructions");

    instructions.style = "display: block";
  }

  function referencesInfo() {
    cleanScreen();

    setFrame();

    frameClose();

    references = document.getElementById("references");

    references.style = "display: block";
  }

  function frameClose() {
    closeX = document.getElementById("close");

    closeX.style = "display: block";
  }

  //##########################################
  //######### FUNCTION SECTION ###############
  //##########################################

  function setMusicGame() {
    dotsGame.playMusic("play", levelGame);
  }

  function showCurrentLevel() {
    currentLevel = document.getElementById("currentLevel");
    currentLevel.innerHTML = `Level ${levelGame}`;
  }

  function timerStart() {
    const timerPlaceholder = document.getElementById("count_down");
    timerPlaceholder.textContent = 10;

    let countDown = function() {
      if (timerPlaceholder.textContent <= 0) {
        clearInterval(myTime);
        // show score and see if the challenge is done
        achieveChallenge();
      } else {
        timerPlaceholder.textContent = timerPlaceholder.textContent - 1;
      }
    };

    var myTime = setInterval(countDown, 1000);
  }

  function achieveChallenge() {
    totalScore = dotsGame.dotMatched;
    // welldone11 = document.getElementById("welldone-msg");
    // tooltip = document.getElementById("welldone-tooltip");

    switch (levelGame) {
      case 1:
        if (totalScore < level1) {
          printGameOver();
        } else {
          dotsGame.winSound();
          dotsGame.playMusic("stop", levelGame);
          levelGame++;

          welldoneMessage();
          setTimeout(closeWellDone, 4000);

          start();
        }
        break;
      case 2:
        if (totalScore < level2) {
          printGameOver();
        } else {
          dotsGame.winSound();
          dotsGame.playMusic("stop", levelGame);
          levelGame++;
          welldoneMessage();
          setTimeout(closeWellDone, 4000);

          start();
        }
        break;
      case 3:
        if (totalScore < level3) {
          printGameOver();
        } else {
          dotsGame.winSound();
          dotsGame.playMusic("stop", levelGame);
          welldoneMessage();
        }
        break;
      default:
        console.error("this level does not exist");
        printGameOver();
        break;
    }
  }

  function welldoneMessage() {
    welldone11 = document.getElementById("welldone-msg");
    tooltip = document.getElementById("welldone-tooltip");

    tooltip.style = "display: block";
    welldone11.style = "display: block";
  }

  function closeWellDone() {
    welldone11 = document.getElementById("welldone-msg");
    tooltip = document.getElementById("welldone-tooltip");

    tooltip.style = "display: none";
    welldone11.style = "display: none";
  }

  function shuffleDots(level) {
    challengeLevel = document.getElementById("challenge");
    idxHtml = 0;
    html = "";

    switch (level) {
      case 1:
        challengeLevel.innerHTML = `challenge - ${level1} matches`;

        dotsGame.shuffleDots(4).forEach(el => {
          if (idxHtml < 4) {
            html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
              el.background
            }'></div>`;
          }
        });
        break;
      case 2:
        challengeLevel.innerHTML = `challenge - ${level2} matches`;

        dotsGame.shuffleDots(8).forEach(el => {
          if (idxHtml < 8) {
            html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
              el.background
            }'></div>`;
          }
        });
        break;
      case 3:
        challengeLevel.innerHTML = `challenge - ${level3} matches`;

        dotsGame.shuffleDots(12).forEach(el => {
          if (idxHtml < 12) {
            html += `<div class='dotGame dotClass' id='${idxHtml++}' style='margin-top: 50px; background:${
              el.background
            }'></div>`;
          }
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
    eleven = document.getElementById("eleven-img");

    titleDot.style = "display: none";
    dotsInit.style = "display: none";
    menu.style = "display: none";
    eleven.style = "display: none";
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
              dotsGame.positiveBeep();

              initTheGame();
            } else {
              dotsGame.negativeBeep();
            }
          } else {
            dotsGame.negativeBeep();
          }
          selectedItemList = [];
        }
      };
    }
  }
});
