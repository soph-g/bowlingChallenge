const Scorecard = function() {
  var rolls = [];

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount)
    return rolls;
  }

  var validRoll = function(roll) {
    return roll >= 0 && roll <= 10
  }

  var activeGame = function() {
    return rolls.length < 10
  }

  return {
    addRoll: addRoll
  };
}

module.exports = Scorecard;
