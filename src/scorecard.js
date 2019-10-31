const Scorecard = function() {
  var rolls = [];
  var frameScores = [];

  var addRoll = function(pinCount) {
    if (validRoll(pinCount) && activeGame()) rolls.push(pinCount);
    return rolls;
  }

  var calculateFrameScores = function() {
    if (rolls.length > 1) frameScores.push(rolls[0] + rolls[1])
    if (rolls.length > 3) frameScores.push(rolls[2] + rolls[3])
    if (rolls.length > 5) frameScores.push(rolls[4] + rolls[5])
    if (rolls.length > 7) frameScores.push(rolls[6] + rolls[7])
    if (rolls.length > 9) frameScores.push(rolls[8] + rolls[9])
    if (rolls.length > 11) frameScores.push(rolls[10] + rolls[11])
    if (rolls.length > 13) frameScores.push(rolls[12] + rolls[13])
    if (rolls.length > 15) frameScores.push(rolls[14] + rolls[15])
    if (rolls.length > 17) frameScores.push(rolls[16] + rolls[17])
    if (rolls.length > 19) frameScores.push(rolls[18] + rolls[19])
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
