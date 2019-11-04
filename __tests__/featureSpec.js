const Game = require('../src/game.js')

describe('Gutter Game', () => {
  
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("returns a zero score", () => {
    for (i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(0)
  });
});
