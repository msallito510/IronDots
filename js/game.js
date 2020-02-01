class Game {
  constructor(dots) {
    this.dots = dots;
    this.dotMatched = 0;
    this.countDown = 20;
  }

  shuffleDots() {
    let currentIndex = 4;
    let tmpValue = undefined;
    let randomIndex = undefined;
    let counterPair = 1;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tmpValue = this.dots[currentIndex];

      if (randomIndex <= 4 && counterPair > 0) {
        this.dots[currentIndex] = this.dots[randomIndex];
        this.dots[currentIndex - 1] = this.dots[randomIndex];
        counterPair -= 1;
        currentIndex -= 1;
      } else if (currentIndex >= 0 && counterPair > 0) {
        this.dots[currentIndex + 1] = this.dots[randomIndex];
        counterPair -= 1;
        currentIndex -= 1;
      }

      this.dots[randomIndex] = tmpValue;
    }

    return this.dots;
  }

  checkforSameColour(dotSelected) {
    let dots = false;

    if (dotSelected[0 + 1].id === dotSelected[1].id) {
      if (dotSelected[0].colour === dotSelected[1].colour) {
        dots = true;
        this.dotMatched++;
      }
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

  timerStart() {
    countDown = setInterval(20, 1000);
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
