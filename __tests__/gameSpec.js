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

    describe('scoring spares', () => {
      it('does not allow an extra roll if the spare is scored in the first 9 frames', () => {
        game.roll(5);
        game.roll(5);
        helper.gutterGame(game, 18);
        result = [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(game.roll(5)).toEqual(result);
      });

      it('allows an extra roll if the spare is scored in the first 9 frames', () => {
        helper.gutterGame(game, 18);
        game.roll(5);
        game.roll(5);
        result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5]
        expect(game.roll(5)).toEqual(result);
      });

      it('only allows 1 extra roll', () => {
        helper.gutterGame(game, 18);
        game.roll(5);
        game.roll(5);
        game.roll(5);
        result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5]
        expect(game.roll(3)).toEqual(result);
      });
    });

    describe('scoring strikes', () => {
      it('reduces the number if strike is not in final frame', () => {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        helper.gutterGame(game, 16)
        result = [10, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(game.roll(5)).toEqual(result);
      });

      it('only reduces the count for a roll rolled in the first roll', () => {
        game.roll(0);
        game.roll(10);
        helper.gutterGame(game, 18);
        result = [0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(game.roll(8)).toEqual(result)
      });

      it('allows two rolls after a strike in the final frame', () => {
        helper.perfectGame(game)
        result = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        expect(game.roll(5)).toEqual(result);
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

    describe('spares', () => {
      it('calculates the score including bonuses', () => {
        helper.multipleSpareGame(game);
        expect(game.score()).toEqual(150)
      });
    });

    describe('strikes', () => {
      it('calculates the score including bonuses', () => {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        helper.gutterGame(game, 16)
        expect(game.score()).toEqual(24)
      });

      it('calculates the score for a perfect game', () => {
        helper.perfectGame(game);
        expect(game.score(true)).toEqual(300);
      });
    })
  });
});
