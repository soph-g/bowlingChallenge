const Scorecard = function() {
  var rolls = [];
  var frameScores = [];

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount);
    return rolls;
  }

  var calculateFrameScores = function() {
    rollCount = rolls.length
    frameCount = frameScores.length
    if (Math.floor(rollCount / 2) > frameCount) {
      for (var i = frameCount * 2; i < rollCount - 1; i += 2) {
        frameScores.push(rolls[i] + rolls[i+1])
      }
    }
    return frameScores;
  }

  var validRoll = function(roll) {
    return roll >= 0 && roll <= 10
  }

  var activeGame = function() {
    return rolls.length < 20
  }

  return {
    addRoll: addRoll,
    calculateFrameScores: calculateFrameScores
  };
}

module.exports = Scorecard;
