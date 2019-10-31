const Scorecard = function() {
  var rolls = [];
  // var frameScores = [];

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount);
    return rolls;
  }

  var calculateScores = function() {
    result = []
    if ( rolls.length > 1) {
      var score = rolls.reduce((roll1, roll2) => {
        return roll1 + roll2;
      })
      result.push(score)
    }
    return result;
  }

  var validRoll = function(roll) {
    return roll >= 0 && roll <= 10
  }

  var activeGame = function() {
    return rolls.length < 20
  }

  return {
    addRoll: addRoll,
    calculateScores: calculateScores
  };
}

module.exports = Scorecard;
