class Game {
  constructor(dots) {
    this.dots = dots;
    this.dotMatched = 0;
    this.countDown = 60;
    // this.dots = `
    //   <div>
    // `;
  }

  start() {
    this.getDots();
  }

  getDot() {
    this.dots.push();
  }

  shuffleDots() {
    let currentIndex = 4;
    let tmpValue = undefined;
    let randomIndex;
    let cloneCounter = 1;
    let randomCloneIndex;

    while (currentIndex > 0) {
      randomCloneIndex = Math.floor(Math.random() * currentIndex);
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tmpValue = this.dots[currentIndex];
      if (randomIndex === randomCloneIndex && cloneCounter > 0) {
        this.dots[currentIndex] = this.dots[randomIndex];
        if (currentIndex <= 4) {
          this.dots[currentIndex - 1] = this.dots[randomIndex];
        } else if (currentIndex >= 0) {
          this.dots[currentIndex + 1] = this.dots[randomIndex];
        }

        currentIndex -= 1;
        cloneCounter -= 1;
      } else {
        this.dots[currentIndex] = this.dots[randomIndex];
        this.dots[randomIndex] = tmpValue;
      }
    }

    return this.dots;
  }

  checkforSameColour(dot1, dot2) {
    let dots = false;

    if (dot1 === dot2) {
      dots = true;
      this.dotMatched++;
    }

    return dots;
  }

  areTheSameNode(dot1, dot2) {
    let areTheSame = false;

    if (dot1 === dot2) {
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
