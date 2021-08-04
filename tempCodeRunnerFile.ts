const BlackJack = require("./src/index");
const _prompt = require('prompt-sync')();

const game = new BlackJack();
game.init();

function logGameData() {
    const dealerCards = game.dealer.getCards();
    const dealerValue = BlackJack.calculateHandValue(dealerCards);
    
    const playerCards = game.player.getCards();
    const playerValue = BlackJack.calculateHandValue(playerCards);

    console.log('dealer', game.dealer.getPrettyCards(), dealerValue);
    console.log('player', game.player.getPrettyCards(), playerValue);
}

while (true) {
    logGameData();
    const input = _prompt('[H]it or [S]tand? ');
    if (input.toLowerCase() === 'h') {
        const canHit = game.hit();
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
if (game.isPlayerWon) console.log('Congratulation, you won!');
else console.log('Better luck next time');

