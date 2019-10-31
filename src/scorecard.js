const Scorecard = function() {
  var rolls = [];
  var STANDARD_ROLL_COUNT = 20
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
        if (rolls[i+1]) frameScores.push(rolls[i] + rolls[i+1])
      }
    }
    return frameScores;
  }

  var validRoll = function(roll) {
    return roll >= 0 && roll <= 10
  }

  var activeGame = function() {
    return rolls.length < rollsInGame
  }

  var bonusRollWon = function() {
    return rolls.length == STANDARD_ROLL_COUNT && rolls[18] + rolls[19] == 10
  }

  return {
    addRoll: addRoll,
    calculateFrameScores: calculateFrameScores
  };
}

module.exports = Scorecard;
