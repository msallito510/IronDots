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
        let audio_1 = new Audio("./audio/dokfraktal-stranger-bass.wav");
        this._setMusic(command, audio_1);
        break;
      case 2:
        let audio_2 = new Audio("./audio/arcade-music-loop_1.wav");
        this._setMusic(command, audio_2);
        break;
      case 3:
        let audio_3 = new Audio("./audio/arcade-music-loop_2.wav");
        this._setMusic(command, audio_3);
        break;
      default:
        console.error("option does not exist");
        break;
    }
  }

  _setMusic(command, audio) {
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
