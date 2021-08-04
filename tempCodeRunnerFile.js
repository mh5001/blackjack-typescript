var BlackJack = require("./ts-built/index").default;
var _prompt = require('prompt-sync')();
var game = new BlackJack();
game.init();
function logGameData() {
    var dealerCards = game.dealer.getCards();
    var dealerValue = BlackJack.calculateHandValue(dealerCards);
    var playerCards = game.player.getCards();
    var playerValue = BlackJack.calculateHandValue(playerCards);
    console.log('dealer', game.dealer.getPrettyCards(), dealerValue);
    console.log('player', game.player.getPrettyCards(), playerValue);
}
while (true) {
    logGameData();
    var input = _prompt('[H]it or [S]tand? ');
    if (input.toLowerCase() === 'h') {
        var canHit = game.hit();
        if (!canHit) {
            game.stand();
            break;
        }
    }
    if (input.toLowerCase() === 's') {
        game.stand();
        break;
    }
}
logGameData();
if (game.isPlayerWon)
    console.log('Congratulation, you won!');
else
    console.log('Better luck next time');
