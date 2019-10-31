const Scorecard = require('../../src/scorecard.js')

describe("Gutter Game", () => {
  let scorecard;

  beforeEach(() => {
    scorecard = Scorecard()
  });

  describe('#addRoll', () => {
    it("stores the score", () => {
      expect(scorecard.addRoll(0)).toEqual([0]);
    });

    it("stores a second roll", () => {
      scorecard.addRoll(0)
      expect(scorecard.addRoll(0)).toEqual([0, 0]);
    });

    it("only allows 10 rolls", () => {
      for (var i = 0; i < 10; i++) {
        scorecard.addRoll(0)
      }
      expect(scorecard.addRoll(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    });

    it("stores specified input", () => {
      expect(scorecard.addRoll(9)).toEqual([9])
    })
  });
});
