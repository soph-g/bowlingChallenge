const Game = function() {

  var rolls = []
  var frameScores = []
  const STANDARD_ROLL_COUNT = 20
  var maximum_rolls = STANDARD_ROLL_COUNT

  function roll(rollScore) {
    if (gameInProgress()) rolls.push(rollScore);
    if (equalsTen(rollScore)) maximum_rolls -= 1;
    return rolls
  }

  function score() {
    calculateFrameScores()
    return frameScores.reduce((frame1, frame2) => frame1 += frame2)
  }

  function calculateFrameScores() {
    for (var i = 0; i < maximum_rolls; i+=2) {
      frameScores.push(rolls[i] + rolls[i+1])
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
