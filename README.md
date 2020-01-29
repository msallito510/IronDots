# Welcome to IronDots!

The purpose of the game is to match two or more points that have the same color and reach the highest possible score against the clock.
The colors appear on the screen in horizontal or vertical format.
The game screen is a combination of points with different colors where the player has to match selecting the points with the same colors.
The player can use the mouse to select the first point and then select the left points.
The game ends when time runs out.

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

- Create a line with four dots that have at least two dots with the same colour and the rest with different colours. The colours are randomly selected and, by default, there are two or more dots with a different colour.
- Create a player on line.
- Match the dots which have the same colour.
  - Kip clicking on a dot and slide selecting another dot in order to match it.
  - The selected dots disappear from the screen appears new dots replacing the matched dots.
  - The score is updated by increasing one point.
- Match the dots which don't have the same colour.
  _ The selected dots are still in the screen.
  _ The score is not updated.
- Check time out game
- If time out -> Game Over -> Show Game Over Screen -> Show Score.

---

## BACK LOG

### Rotate canvas

### Score

- Run counter down and store score on game over

### High score

- Create High Score Screen
- Show latest score on Start Screen
- Add high score button to Start Screen

### Music

- Add background music to game.
- Add music on and off button to Start screen.
- Add sound every match.

### Player colors

- Create Color Screen
  - Let user choose color of player with color buttons
- Add Choose color button to Start Screen
- Change color of player when playing

### Levels

- Check score and increase level.
  _ first level is a line with four dots (matrix 1 x 4).
  _ second level is added a new row with four dots ( matrix 2 x 4).

---

## Data structure

_main.js_
`createStartScreen(id); createGameScreen(id); createGameOverScreen(id); destroyStartScreen(); destroyGameScreen(); destroyGameOverScreen(); var game = new Game({ this.rows, this.columns, ctx: ctx, backgroundcolor = ['xxx','xxx','xxx'], this.obstacles, this.player }); game.init();`
_Game.js_

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
