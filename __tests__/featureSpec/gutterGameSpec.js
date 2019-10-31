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

      it("only allows 20 rolls", () => {
        for (var i = 0; i < 20; i++) {
          scorecard.addRoll(0)
        }
        expect(scorecard.addRoll(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      });

      it("stores specified input for up to 20 rolls where no bonuses are scored", () => {
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
        expect(scorecard.addRoll(10)).toEqual([0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5])
      });
    });

    describe("scoring a spare", () => {
      it("records the roll during the game", () => {
        scorecard.addRoll(1);
        expect(scorecard.addRoll(9)).toEqual([1, 9])
      });

      it("allows an extra roll if a spare is scored in the 10th frame", () => {
        scorecard.addRoll(0);
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.addRoll(1);
        scorecard.addRoll(2);
        scorecard.addRoll(2);
        scorecard.addRoll(3);
        scorecard.addRoll(3);
        scorecard.addRoll(4);
        scorecard.addRoll(4);
        scorecard.addRoll(0);
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.addRoll(1);
        scorecard.addRoll(2);
        scorecard.addRoll(2);
        scorecard.addRoll(3);
        scorecard.addRoll(3);
        scorecard.addRoll(5);
        scorecard.addRoll(5);
        expect(scorecard.addRoll(8)).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 0, 0, 1, 1, 2, 2, 3, 3, 5, 5, 8 ])
      });
    });
  });

  describe("#calculateFrameScores", () => {
    it("returns an empty array when there are no complete frames", () => {
      scorecard.addRoll(0);
      expect(scorecard.calculateFrameScores()).toEqual([]);
    });

    describe('no bonuses', () => {
      it("returns the score when there is a single complete frame", () => {
        scorecard.addRoll(2);
        scorecard.addRoll(7);
        expect(scorecard.calculateFrameScores()).toEqual([9]);
      });

      it("returns the score when two frames are complete", () => {
        scorecard.addRoll(0)
        scorecard.addRoll(9)
        scorecard.addRoll(2)
        scorecard.addRoll(6)
        expect(scorecard.calculateFrameScores()).toEqual([9, 8]);
      });

      it("returns the score when multiple frames are complete", () => {
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.addRoll(2);
        scorecard.addRoll(3);
        scorecard.addRoll(4);
        scorecard.addRoll(5);
        scorecard.addRoll(6);
        scorecard.addRoll(1);
        scorecard.addRoll(7);
        scorecard.addRoll(2);
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.addRoll(2);
        scorecard.addRoll(3);
        scorecard.addRoll(4);
        scorecard.addRoll(5);
        scorecard.addRoll(6);
        scorecard.addRoll(1);
        scorecard.addRoll(7);
        scorecard.addRoll(2);
        expect(scorecard.calculateFrameScores()).toEqual([1, 5, 9, 7, 9, 1, 5, 9, 7, 9]);
      });

      it("returns the score when there is a complete and incomplete frame", () => {
        scorecard.addRoll(2);
        scorecard.addRoll(7);
        scorecard.addRoll(4);
        expect(scorecard.calculateFrameScores()).toEqual([9]);
      });

      it("returns the correct score when called twice", () => {
        scorecard.addRoll(2);
        scorecard.addRoll(7);
        scorecard.addRoll(8);
        expect(scorecard.calculateFrameScores()).toEqual([9]);
        expect(scorecard.calculateFrameScores()).toEqual([9]);
      });

      it("returns the correct score when called multiple times", () => {
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.calculateFrameScores();
        scorecard.addRoll(2);
        scorecard.calculateFrameScores();
        scorecard.addRoll(3);
        scorecard.calculateFrameScores();
        scorecard.addRoll(4);
        scorecard.calculateFrameScores();
        scorecard.addRoll(5);
        scorecard.calculateFrameScores();
        scorecard.addRoll(6);
        scorecard.addRoll(1);
        scorecard.addRoll(7);
        scorecard.addRoll(2);
        scorecard.addRoll(0);
        scorecard.addRoll(1);
        scorecard.addRoll(2);
        scorecard.addRoll(3);
        scorecard.addRoll(4);
        scorecard.addRoll(5);
        scorecard.addRoll(6);
        scorecard.addRoll(1);
        scorecard.addRoll(7);
        scorecard.addRoll(2);
        scorecard.calculateFrameScores();
        expect(scorecard.calculateFrameScores()).toEqual([1, 5, 9, 7, 9, 1, 5, 9, 7, 9]);
      });
    });
  });
});
