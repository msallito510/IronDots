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

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tmpValue = this.dots[currentIndex];
      this.dots[currentIndex] = this.dots[randomIndex];
      this.dots[randomIndex] = tmpValue;
    }

    return this.dots;
  }

  checkIfAreEquals(dot1, dot2) {
    let dots = false;

    if (dot1 === dot2) {
      dots = true;
      this.dotMatched++;
    }

    return dots;
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
