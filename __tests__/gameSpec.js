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
        helper.noBonusGame(game)
        result = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0]
        expect(game.roll(8)).toEqual(result)
      });
    });

    describe('scoring a strike', () => {
      it('allows fewer rolls after a strike', function() {
        game.roll(10)
        helper.gutterGame(game, 18)
        result = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(game.roll(5)).toEqual(result)
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
      expect(game.score()).toEqual(90)
    });

    describe('bonus scores', () => {
      describe('spare', () => {
        it('includes the next roll after a spare as a bonus', () => {
          helper.singleSpareGame(game)
          expect(game.score()).toEqual(21)
        });
      });

      xdescribe('strike', () => {
        it('includes the next two rolls as a bonus', () => {
          helper.singleStrikeGame(game)
          expect(game.score()).toEqual(22)
        });
      });
    });
  });
});
