# Welcome to StrangerDots!

The purpose of the game is to match two or more points that have the same colour and reach the highest possible score against the clock.
The colors appear on the screen in horizontal or vertical format.
The screen is a combination of points with different colours where the player has to match one point with another point of the same colour.
The player can use the mouse to select the first point and then the other point.
The game ends when the time is over.

## MVP

### Technique

Html5 DOM manipulation - Vanilla and Javascript

### Game states

- _Start Screen_
  - Title
  - Play button
- _Game Screen_
  - DOM
- _Game Over Screen_
  - Play again button
  - Go to start screen button

### Game

- Create a line with four dots that have at least two dots of the same colour and the rest with different colours. The colours are randomly selected and, by default, there are two or more dots with a different colour.
- Create a player online.
- Match the dots that have the same colour.
  - Keep clicking on a dot and slide selecting another dot in order to match it.
  - The selected dots disappear from the screen and two new dots will replace them.
  - The score is updated by adding one point.
- Match the dots which don't have the same colour.
  _ The selected dots are still in the screen.
  _ The score is not updated.
- Check time out game
- If time over -> Game Over -> Show Game Over Screen -> Show Score.

---

## BACK LOG

### Rotate canvas

### Score

- Run count down and store score on game over

### High score

- Create High Score Screen
- Show latest score on Start Screen
- Add high score button to Start Screen

### Music

- Add background music to game.
- Add music on and off button to Start screen.
- Add sound every match.

### Player colours

- Create Colour Screen
- Let user choose colour of player with colour buttons
- Add "Choose colour" button to Start Screen
- Change colour of player when playing

### Levels

- Check score and increase level.
  _ First level is a line with four dots (matrix 1 x 4).
  _ Second level is added, a new row with four dots ( matrix 2 x 4).

---

## Data structure

```js
function Game(options) {}
Game.drawBoard();
Game.drawDots();
Game.generateRamdonDots();
Game.matchDots();
Game.gameOver();
Game.init();
Game.PlayerScore();
`
_Player.js_
`;
function Player() {
  this.width;
  this.height;
  this.color;
}
Player.selectDots();
```

## Links

[Iron flip run Trello](https://trello.com/b/pj81BuC3/irondots)
[Github](https://github.com/msallito510/IronDots)
[Presentation](https://slides.com/marcebcn/irondots/#/)
