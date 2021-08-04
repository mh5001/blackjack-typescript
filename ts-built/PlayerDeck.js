"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SUIT = ['♠', '♥', '♣', '♦'];
const VALUE = ['K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q'];
class PlayerDeck {
    constructor() {
        this.hand = new Array();
    }
    addCard(card) {
        this.hand.push(card);
    }
    getCards() {
        return [...this.hand];
    }
    getPrettyCards() {
        return this.hand.map((card) => {
            const number = card % 13;
            const suit = Math.floor(card / 13);
            return `${VALUE[number]} ${SUIT[suit]}`;
        });
    }
}
exports.default = PlayerDeck;
