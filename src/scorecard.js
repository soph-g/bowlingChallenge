const Scorecard = function() {
  var rolls = [];
  var STANDARD_ROLL_COUNT = 20

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount);
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
    return rolls.length < STANDARD_ROLL_COUNT
  }

  return {
    addRoll: addRoll,
    calculateFrameScores: calculateFrameScores
  };
}

module.exports = Scorecard;
