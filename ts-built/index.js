"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = require("./Deck");
const PlayerDeck_1 = require("./PlayerDeck");
const DealerDeck_1 = require("./DealerDeck");
class BlackJack {
    constructor() {
        this.deck = new Deck_1.default();
        this.player = new PlayerDeck_1.default();
        this.dealer = new DealerDeck_1.default();
        this.isGameOver = false;
        this.isPlayerWon = false;
    }
    testInit() {
        this.deck.shuffle();
        this.player.addCard(1);
        this.dealer.addCard(this.deck.drawCard());
        this.player.addCard(14);
        this.dealer.addCard(this.deck.drawCard());
    }
    init() {
        this.deck.shuffle();
        // Blackjack card dealing
        this.player.addCard(this.deck.drawCard());
        this.dealer.addCard(this.deck.drawCard());
        this.player.addCard(this.deck.drawCard());
        this.dealer.addCard(this.deck.drawCard());
        if (BlackJack.calculateHandValue(this.player.getCards()) === 21) {
            this.isPlayerWon = true;
            this.isGameOver = true;
        }
    }
    hit() {
        if (!this.isGameOver)
            this.player.addCard(this.deck.drawCard());
        const playerCards = this.player.getCards();
        const canHit = BlackJack.calculateHandValue(playerCards) < 21;
        return canHit;
    }
    stand() {
        this.dealer.isReveal = true;
        const playerHandValue = BlackJack.calculateHandValue(this.player.getCards());
        if (playerHandValue > 21) {
            this.isGameOver = true;
        }
        while (!this.isGameOver) {
            const dealerHandValue = BlackJack.calculateHandValue(this.dealer.getCards());
            if (dealerHandValue > 21) {
                this.isGameOver = true;
                this.isPlayerWon = true;
                break;
            }
            else if (dealerHandValue > playerHandValue) {
                this.isGameOver = true;
            }
            if (!this.isGameOver)
                this.dealer.addCard(this.deck.drawCard());
        }
    }
    static calculateHandValue(cards) {
        let outputValue = 0;
        let hasValue = true;
        let aceCount = 0;
        cards.forEach(card => {
            // Card handling
            if (!hasValue)
                return;
            if (card === -1)
                hasValue = false;
            let cardValue = card % 13;
            if (cardValue > 10 || cardValue === 0)
                cardValue = 10;
            if (cardValue === 1) {
                cardValue = 11;
                aceCount++;
            }
            outputValue += cardValue;
        });
        if (!hasValue)
            return -1;
        while (outputValue > 21 && aceCount > 0) {
            if (outputValue === 22)
                outputValue -= 1;
            if (outputValue > 22)
                outputValue -= 10;
            aceCount--;
        }
        return outputValue;
    }
}
exports.default = BlackJack;
