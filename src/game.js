const Game = function() {

  var rolls = []
  var frameScores = []
  const STANDARD_ROLL_COUNT = 20
  var maximum_rolls = STANDARD_ROLL_COUNT
  var bonusCalculated = false
  var firstRoll = true

  function roll(rollScore) {
    if (gameInProgress()) rolls.push(rollScore)
    updateGame(rollScore);
    if (!gameInProgress() && !bonusCalculated) calculateBonusRolls();
    return rolls
  }

  function score(log = false) {
    calculateFrameScores(log)
    return frameScores.reduce((frame1, frame2) => frame1 += frame2)
  }

  function calculateFrameScores(log) {
    for (var i = 0; i < maximum_rolls - 1; i += 2) {
      score = rolls[i] + rolls[i+1]
      if (equalsTen(score)) score += rolls[i+2]
      frameScores.push(score)
    }
  }

  function gameInProgress() {
    return rolls.length < maximum_rolls
  }

  function equalsTen(score) {
    return score == 10
  }

  function calculateBonusRolls() {
    bonusCalculated = true;
    var frameScore = rolls[rolls.length-1] + rolls[rolls.length-2]
    if (equalsTen(frameScore)) maximum_rolls += 1;
  }

  function updateGame(roll) {
    isStrike(roll) ? maximum_rolls -= 1 : firstRoll = !firstRoll;
  }

  function isStrike(roll) {
    return equalsTen(roll) && firstRoll
  }

  return {
    roll: roll,
    score: score
  }
}

module.exports = Game;
