const Game = function() {

  var rolls = []
  var frameScores = []
  const STANDARD_ROLL_COUNT = 20
  var maximum_rolls = STANDARD_ROLL_COUNT
  var firstRoll = true;

  function roll(rollScore) {
    if (gameInProgress()) {
      rolls.push(rollScore)
      strike(rollScore) && firstRoll == true ? maximum_rolls -= 1 : rollScore = !rollScore
    }
    return rolls
  }

  function score() {
    calculateFrameScores()
    return frameScores.reduce((frame1, frame2) => frame1 += frame2)
  }

  function calculateFrameScores() {
    for (var i = 0; i < maximum_rolls; i+= 2) {
      frameScore = rolls[i] + rolls[i+1];
      if (spare(frameScore)) frameScore += rolls[i+2]
      if (strike(frameScore)) { console.log('strike!');}
      frameScores.push(frameScore);
    }
  }

  function gameInProgress() {
    return rolls.length < maximum_rolls
  }

  function spare(frameScore) {
    return frameScore == 10
  }

  function strike(score) {
    return score == 10 ;

  }

  return {
    roll: roll,
    score: score
  }
}

module.exports = Game;
