import Deck from './Deck';
import PlayerDeck from './PlayerDeck';
import DealerDeck from './DealerDeck';

class BlackJack {
    public player: PlayerDeck;
    public dealer: DealerDeck;
    public deck: Deck;
    public isGameOver: boolean;
    public isPlayerWon: boolean;
    constructor() {
        this.deck = new Deck();
        this.player = new PlayerDeck();
        this.dealer = new DealerDeck();
        this.isGameOver = false;
        this.isPlayerWon = false;
    }

    testInit(): void {
        this.deck.shuffle();
        this.player.addCard(1);
        this.dealer.addCard(this.deck.drawCard());
        this.player.addCard(14);
        this.dealer.addCard(this.deck.drawCard());
    }

    init(): void {
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

    hit(): boolean {
        if (!this.isGameOver) this.player.addCard(this.deck.drawCard());
        const playerCards = this.player.getCards();
        const canHit = BlackJack.calculateHandValue(playerCards) < 21;
        return canHit;
    }

    stand(): void {
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
            } else if (dealerHandValue > playerHandValue) {
                this.isGameOver = true;
            }
            if (!this.isGameOver) this.dealer.addCard(this.deck.drawCard());
        }
    }

    static calculateHandValue(cards: number[]): number {
        let outputValue = 0;
        let hasValue = true;
        let aceCount = 0;
        cards.forEach(card => {
            // Card handling
            if (!hasValue) return;
            if (card === -1) hasValue = false;
            let cardValue = card % 13;
            if (cardValue > 10 || cardValue === 0) cardValue = 10;
            if (cardValue === 1) {
                cardValue = 11;
                aceCount++;
            }

            outputValue += cardValue;
        });
        if (!hasValue) return -1;

        while (outputValue > 21 && aceCount > 0) {
            if (outputValue === 22) outputValue -= 1;
            if (outputValue > 22) outputValue -= 10;
            aceCount--;
            
        }

        return outputValue;
    }
}

export default BlackJack;