const Scorecard = require('../../src/scorecard.js')

describe("Gutter Game", () => {
  let scorecard;

  beforeEach(() => {
    scorecard = Scorecard()
  });

  describe('#addRoll', () => {
    it('only allows valid inputs', () => {
      expect(scorecard.addRoll(-1)).toEqual([])
      expect(scorecard.addRoll(11)).toEqual([])
    })

    describe('no bonus scores', () => {
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

      it("stores specified input for up to 10 rolls where no bonuses are scored", () => {
        scorecard.addRoll(0)
        scorecard.addRoll(9)
        scorecard.addRoll(1)
        scorecard.addRoll(8)
        scorecard.addRoll(2)
        scorecard.addRoll(7)
        scorecard.addRoll(3)
        scorecard.addRoll(6)
        scorecard.addRoll(4)
        scorecard.addRoll(5)
        expect(scorecard.addRoll(10)).toEqual([0, 9, 1, 8, 2, 7, 3, 6, 4, 5])
      });
    });
  });
});
