class Deck {
    public deck: number[];
    
    constructor() {
        this.deck = [];
        for (let i = 0; i < 52; i++) {
            this.deck.push(i);
        }
    }

    shuffle(): void {
        this.deck.forEach((card: number, i: number): void => {
            const rand = Math.floor(Math.random() * this.deck.length);
            const temp = this.deck[rand];
            this.deck[rand] = card;
            this.deck[i] = temp;
        });
    }

    drawCard(): number {
        return this.deck.splice(0, 1)[0];
    }
}

export default Deck;