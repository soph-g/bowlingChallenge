const Game = require('../src/game.js')
const helper = require('./helpers/specHelper.js')

describe('Bowling Scores', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('Gutter game', () => {
    it("returns a zero score", () => {
      helper.gutterGame(game, 20);
      expect(game.score()).toEqual(0);
    });
  });

  describe('Standard game - no bonus scores', () => {
    it('returns the appropriate score', () => {
      helper.noBonusGame(game);
      expect(game.score()).toEqual(90);
    });

    it('does not allow more than 20 rolls', () => {
      helper.noBonusGame(game);
      game.roll(8);
      expect(game.score()).toEqual(90);
    });
  });

  describe('bonus scores', () => {
    it('calculates the score for a game of all spares', () => {
      helper.multipleSpareGame(game);
      expect(game.score()).toEqual(150);
    });

    it('calculates the score of a game including spares', () => {
      helper.gameWithSpares(game);
      expect(game.score()).toEqual(74)
    });

    it('calculates the score for a game with a strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(4);
      helper.gutterGame(game, 16)
      expect(game.score()).toEqual(24)
    });

    it('calculates the score for a perfect game', () => {
      helper.perfectGame(game);
      expect(game.score()).toEqual(300);
    });
  });

  describe('random games', () => {
    it('scores games correctly', () => {
      game.roll(1)
      game.roll(4)
      game.roll(4)
      game.roll(5)
      game.roll(6)
      game.roll(4)
      game.roll(5)
      game.roll(5)
      game.roll(10)
      game.roll(0)
      game.roll(1)
      game.roll(7)
      game.roll(3)
      game.roll(6)
      game.roll(4)
      game.roll(10)
      game.roll(2)
      game.roll(8)
      game.roll(6)
      expect(game.score()).toEqual(133)
    });
  });
});
