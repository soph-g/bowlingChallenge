function gutterGame(game, rollCount) {
  for (var i = 0; i < rollCount; i++) {
    game.roll(0)
  }
}

function noBonusGame(game) {
  game.roll(0)
  game.roll(9)
  game.roll(1)
  game.roll(8)
  game.roll(2)
  game.roll(7)
  game.roll(3)
  game.roll(6)
  game.roll(4)
  game.roll(5)
  game.roll(5)
  game.roll(4)
  game.roll(6)
  game.roll(3)
  game.roll(7)
  game.roll(2)
  game.roll(8)
  game.roll(1)
  game.roll(9)
  game.roll(0)
}

function singleSpareGame(game) {
  game.roll(9)
  game.roll(1)
  game.roll(5)
  game.roll(1)
  gutterGame(game, 16)
}

function singleStrikeGame(game) {
  game.roll(10)
  game.roll(1)
  game.roll(5)
  gutterGame(game, 16)
}

function multipleSpareGame(game) {
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(5)
  game.roll(1)
  game.roll(1)
}
function multipleStrikeGame(game) {
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(10)
  game.roll(1)
  game.roll(1)
}

function perfectGame(game) {
  for (var i = 0; i < 12; i++) {
    game.roll(10)
  }
}


module.exports = {
  gutterGame: gutterGame,
  noBonusGame: noBonusGame,
  singleSpareGame: singleSpareGame,
  multipleSpareGame: multipleSpareGame,
  singleStrikeGame: singleStrikeGame,
  multipleStrikeGame: multipleStrikeGame,
  perfectGame: perfectGame
}
