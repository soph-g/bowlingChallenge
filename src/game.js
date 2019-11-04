const Game = function() {

  var rolls = []

  function roll(rollScore) {
    rolls.push(rollScore)
    return rolls
  }

  function score() {
    return 0
  }

  return {
    roll: roll,
    score: score
  }
}

module.exports = Game;
