const Game = require('../src/game.js')
const helper = require('./helpers/specHelper.js')

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
      helper.gutterGame(game, 19)
      result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      expect(game.roll(0)).toEqual(result);
    });

    describe('no bonus roll', () => {
      it('only allows 20 rolls', () => {
        helper.noBonusGame(game);
        result = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0];
        expect(game.roll(8)).toEqual(result);
      });
    });
  });

  describe('#score', () => {
    it('returns 0 when all rolls are 0', () => {
    helper.gutterGame(game, 20)
      expect(game.score()).toEqual(0);
    });

    it('returns the total of rolls when no bonuses are scored', () => {
      helper.noBonusGame(game);
      expect(game.score()).toEqual(90);
    });
  });
});
