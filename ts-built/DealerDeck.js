"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerDeck_1 = require("./PlayerDeck");
class DealerDeck extends PlayerDeck_1.default {
    constructor() {
        super();
        this.isReveal = false;
    }
    getCards() {
        let hand = [...super.getCards()];
        if (!this.isReveal) {
            hand[1] = -1;
        }
        return hand;
    }
    getPrettyCards() {
        let hand = [...super.getPrettyCards()];
        if (!this.isReveal) {
            hand[1] = '*';
        }
        return hand;
    }
}
exports.default = DealerDeck;
