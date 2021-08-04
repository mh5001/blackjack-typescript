import PlayerDeck from "./PlayerDeck";

class DealerDeck extends PlayerDeck {
    public isReveal: boolean;
    constructor() {
        super();
        this.isReveal = false;
    }

    getCards(): number[] {
        let hand = [...super.getCards()];
        if (!this.isReveal) {
            hand[1] = -1;
        }
        return hand;
    }

    getPrettyCards(): string[] {
        let hand = [...super.getPrettyCards()];
        if (!this.isReveal) {
            hand[1] = '*';
        }
        return hand;
    }
}

export default DealerDeck;