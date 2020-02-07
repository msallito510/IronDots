class Game {
  constructor(dots) {
    this.dots = dots;
    this.dotMatched = 0;
    this.audioIsOn = false;
    this.currentAudio = undefined;
  }

  shuffleDots(totalDots) {
    let currentIndex = totalDots;
    let randomIndex = undefined;
    let randomPos = undefined;
    let tmp = undefined;
    let counterPair = 1;

    while (currentIndex > 0) {
      randomPos = Math.floor(Math.random() * totalDots);
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
    if (this.audioIsOn === false) {
      this._getAudio(level);
    }

    switch (command) {
      case "play":
        this.currentAudio.loop = true;
        this.currentAudio.play();
        this.audioIsOn = true;
        break;
      case "stop":
        this.currentAudio.loop = false;
        this.currentAudio.pause();
        this.currentAudio = undefined;
        this.audioIsOn = false;
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  _getAudio(level) {
    switch (level) {
      case 1:
        this.currentAudio = new Audio("./audio/dokfraktal-stranger-bass.wav");
        break;
      case 2:
        this.currentAudio = new Audio("./audio/arcade-music-loop_1.wav");
        break;
      case 3:
        this.currentAudio = new Audio("./audio/arcade-music-loop_2.wav");
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  positiveBeep() {
    new Audio("./audio/positive-sound.wav").play();
  }

  negativeBeep() {
    new Audio("./audio/negative-sound.wav").play();
  }

  winSound() {
    new Audio("./audio/win-sound.wav").play();
  }

  gameOverSound() {
    new Audio("./audio/game-over.wav").play();
  }

  wellDoneImage() {
    const elevenImg = new Image();
    elevenImg.src = "/images/eleven_ST8bits.jpg";
    return elevenImg;
  }
}
