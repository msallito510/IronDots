class Game {
  constructor(dots) {
    this.dots = dots;
    this.dotMatched = 0;
  }

  shuffleDots(levelGame) {
    let currentIndex = levelGame;
    let randomIndex = undefined;
    let tmp = undefined;
    let counterPair = 1;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * 27);
      currentIndex -= 1;

      if (
        currentIndex !== randomIndex &&
        counterPair > 0 &&
        randomIndex !== tmp
      ) {
        tmp = randomIndex;
        this.dots[currentIndex] = this.dots[randomIndex];
        this.dots[currentIndex - 1] = this.dots[randomIndex];
        counterPair -= 1;
        currentIndex -= 1;
      } else if (randomIndex !== tmp) {
        tmp = randomIndex;
        this.dots[currentIndex] = this.dots[randomIndex];
      } else {
        this.dots[currentIndex] = this.dots[randomIndex];
      }
    }

    return this.dots;
  }

  checkforSameColour(dotSelected) {
    let dots = false;

    if (dotSelected[0].colour === dotSelected[1].colour) {
      dots = true;
      this.dotMatched++;
    }

    return dots;
  }

  areTheSameNode(dot1, dot2) {
    let areTheSame = false;

    if (dot1.id === dot2.id) {
      areTheSame = true;
    }

    return areTheSame;
  }

  isFinished() {
    let hasFinished = false;

    if (this.countDown === 0) {
      hasFinished = true;
    }
    return hasFinished;
  }

  playMusic(command, level) {
    switch (level) {
      case 1:
        this._music_level1(command);
        break;
      case 2:
        this._music_level1("stop");
        this._music_level2(command);
        break;
      case 3:
        this._music_level2("stop");
        this._music_level1(command);
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  _music_level1(command) {
    const audio = new Audio("/audio/arcade-music-loop_1.wav");

    switch (command) {
      case "play":
        audio.loop = true;
        audio.play();
        break;
      case "stop":
        audio.pause();
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  _music_level2(command) {
    const audio = new Audio("/audio/arcade-music-loop_2.wav");

    switch (command) {
      case "play":
        audio.loop = true;
        audio.play();
        break;
      case "stop":
        audio.pause();
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  positiveBeep() {
    new Audio("/audio/positive-sound.wav").play();
  }

  negativeBeep() {
    new Audio("/audio/negative-sound.wav").play();
  }

  winSound() {
    new Audio("/audio/win-sound.wav").play();
  }

  gameOverSound() {
    new Audio("/audio/game-over.wav").play();
  }

  // -- > ignored
  checkAreEquals(arrDots) {
    arrDots.array.forEach(function(item, index) {
      // Current => item.name
      let sameColour;
      if (index > 0) {
        sameColour = arrDots[index - 1].name; // one before
      }
      if (index < arrDots.length - 1) {
        sameColour = arrDots[index + 1].name; //Next
      }
    });

    return sameColour;
  }
}
