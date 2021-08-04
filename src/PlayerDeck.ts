const SUIT = ['♠', '♥', '♣', '♦'];
const VALUE = ['K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q'];

class PlayerDeck {
    public hand: number[];
    constructor () {
        this.hand = new Array<number>();
    }

    addCard(card: number): void {
        this.hand.push(card);
    }

    getCards(): number[] {
        return [...this.hand];
    }

    getPrettyCards(): string[] {
        return this.hand.map((card): string => {
            const number = card % 13;
            const suit = Math.floor(card / 13);

            return `${VALUE[number]} ${SUIT[suit]}`;
        });
    }
}

export default PlayerDeck;