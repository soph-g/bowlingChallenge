const Scorecard = function() {
  var rolls = [];
  var STANDARD_ROLL_COUNT = 20
  var MIN_VALID_ROLL = 0
  var MAX_VALID_ROLL = 10
  var rollsInGame = STANDARD_ROLL_COUNT

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount);
    if (bonusRollWon()) rollsInGame += 1;
    return rolls;
  }

  var calculateFrameScores = function() {
    var frameScores = []
    if (rolls.length > 1) {
      for (var i = 0; i < rolls.length; i += 2) {
        var awaitingBonus;
        frameScore = rolls[i] + rolls[i+1]
        if (frameScore === MAX_VALID_ROLL) awaitingBonus = true;
        if (awaitingBonus && rolls[i+2]) {
          frameScore += rolls[i+2];
          awaitingBonus = false
        }
        if (frameScore >= 0 && !awaitingBonus) {
          frameScores.push(frameScore);
        }
      }
    }
    return frameScores;
  }

  var validRoll = function(roll) {
    return roll >= MIN_VALID_ROLL && roll <= MAX_VALID_ROLL
  }

  var activeGame = function() {
    return rolls.length < rollsInGame
  }

  var bonusRollWon = function() {
    return rolls.length == STANDARD_ROLL_COUNT && rolls[18] + rolls[19] == MAX_VALID_ROLL
  }

  return {
    addRoll: addRoll,
    calculateFrameScores: calculateFrameScores
  };
}

module.exports = Scorecard;
