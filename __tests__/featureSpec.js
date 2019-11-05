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
});
