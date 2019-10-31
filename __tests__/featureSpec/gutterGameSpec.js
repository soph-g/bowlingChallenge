const Scorecard = require('../../src/scorecard.js')

describe("Gutter Game", () => {
  let scorecard;
  
  beforeEach(() => {
    scorecard = Scorecard()
  });

  it("doesn't output a score", () => {
    expect(scorecard.roll(0)).toEqual([{ roll1: 0}]);
  });
});
