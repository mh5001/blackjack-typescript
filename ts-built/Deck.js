"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deck {
    constructor() {
        this.deck = [];
        for (let i = 0; i < 52; i++) {
            this.deck.push(i);
        }
    }
    shuffle() {
        this.deck.forEach((card, i) => {
            const rand = Math.floor(Math.random() * this.deck.length);
            const temp = this.deck[rand];
            this.deck[rand] = card;
            this.deck[i] = temp;
        });
    }
    drawCard() {
        return this.deck.splice(0, 1)[0];
    }
}
exports.default = Deck;
