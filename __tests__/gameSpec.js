const Game = require('../src/game.js')

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('#roll', () => {
    it('returns the roll scores', () => {
      expect(game.roll(0)).toEqual([0]);
    });

    it('allows 20 rolls to be recorded', () => {
      for (var i = 0; i < 19; i++) {
        game.roll(0);
      }
      result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      expect(game.roll(0)).toEqual(result);
    });
  });

  describe('#score', () => {
    it("returns the total score", () => {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });
});
