const Scorecard = function() {
  var rolls = [];

  var addRoll = function(pins) {
    if (rolls.length < 10) rolls.push(pins) 
    return rolls;
  }

  return {
    addRoll: addRoll
  };
}

module.exports = Scorecard;
