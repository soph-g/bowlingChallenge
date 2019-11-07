const Game = function() {

  var rolls = []
  var frameScores = []
  const STANDARD_ROLL_LIMIT = 20
  const FRAME_LIMIT = 10
  var maximum_rolls = STANDARD_ROLL_LIMIT
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
    next = 0;
    for (var i = 0; i < FRAME_LIMIT; i ++) {
      score = rolls[next] + rolls[next+1]
      if (score >= 10) score += rolls[next+2]
      frameScores.push(score)
      rolls[next] == 10 ? next += 1 : next += 2;
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
    if (isStrike(rolls[rolls.length-1])) maximum_rolls += 2;
  }

  function updateGame(roll) {
    isStrike(roll) && !bonusCalculated ? maximum_rolls -= 1 : firstRoll = !firstRoll;
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
