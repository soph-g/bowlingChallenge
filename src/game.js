const Game = function() {

  var rolls = []
  var frameScores = []
  const STANDARD_ROLL_COUNT = 20
  const FRAME_COUNT = 10
  var maximum_rolls = STANDARD_ROLL_COUNT
  var firstRoll = true;
  var finalFrame = false;

  function roll(rollScore) {
    if (gameInProgress()) {
      rolls.push(rollScore)
      if (equalsTen(rollScore)) {
        maximum_rolls -= 1;
      };
    }
    return rolls
  }

  function score() {
    calculateFrameScores()
    return frameScores.reduce((frame1, frame2) => frame1 += frame2)
  }

  function calculateFrameScores() {
    for (var i = 0; i < FRAME_COUNT; i++) {
      firstRoll = rolls.shift();
      secondRoll = 0;
      thirdRoll = 0;
      if (equalsTen(firstRoll)) {
        if (i == 10) {
          secondRoll = rolls.shift
        }
        secondRoll = rolls[0]
        thirdRoll = rolls[1]
      } else {
        secondRoll = rolls.shift()
        if (equalsTen(firstRoll + secondRoll)) {
          thirdRoll = rolls[0]
        }
      }
      frameScores.push(firstRoll + secondRoll + thirdRoll)
    }
  }

  function gameInProgress() {
    return rolls.length < maximum_rolls
  }

  function equalsTen(score) {
    return score == 10
  }

  return {
    roll: roll,
    score: score
  }
}

module.exports = Game;
