const Game = require('../src/game.js')
const helper = require('./helpers/specHelper.js')

describe('Bowling Scores', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('Gutter Game', () => {
    it("returns a zero score", () => {
      helper.gutterGame(game, 20);
      expect(game.score()).toEqual(0);
    });
  });

  describe('No bonus score', () => {
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
    describe('scoring spares', () => {
      it('calculates a bonus for that frame', () => {
        helper.singleSpareGame(game);
        expect(game.score()).toEqual(21);
      });

      it('can calculates multiple spares, with a standard final frame', () => {
        helper.multipleSpareGame(game);
        expect(game.score()).toEqual(133);
      });
    });

    describe('scoring strikes', () => {
      xit('adds the next two rolls as a bonus', () => {
        helper.singleStrikeGame(game);
        expect(game.score()).toEqual(22);
      });

      xit('calculates multiple strikes, with a standard final frame', () => {
        helper.multipleStrikeGame(game);
        expect(game.score()).toEqual(245)
      })
    });
  });
});
