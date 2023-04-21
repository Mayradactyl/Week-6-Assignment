console.log("We're in war! 💀")



class Card {
    constructor(suit, value, face) {
        this.suit = suit;
        this.value = value;
        this.face = face;
    }

}
class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = hand;
        this.score = score;

    }

}
var player1=new Player("Mayra",[],0) 
var player2=new Player("Hector", [],0)


class Deck {
    constructor() {
        this.entireDeck = this.makeDeck();
    }

    makeDeck() {
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        let suits = ["♠", "♣", "♥", "♦"]
        let deckOfCards = [];

        for (let x = 0; x < values.length; x++) {
            for (let s = 0; s < suits.length; s++) {
                let card = new Card(suits[s], values[x], x + 2);
                deckOfCards.push(card);

            }
        }
        

        console.log(deckOfCards)
        return deckOfCards;

    }

    shuffleDeck() {
         this.entireDeck.sort((a, b) => 0.5 - Math.random());
    }

    dealDeck() {
        player1.hand=this.entireDeck.slice(0, 26)
        console.log(player1.hand)

        player2.hand=this.entireDeck.slice(26, 52)
        console.log(player2.hand)
    }
}

const gameDeck = new Deck();
gameDeck.shuffleDeck()
gameDeck.dealDeck()
console.log(gameDeck)


playGame(gameDeck.entireDeck);

function playGame(deck) {
    round = 1;

    let player1 = {
        hand: deck.splice(0,26)
    }
    let player2 = {
        hand: deck,
    }

    console.log({player1});
    console.log({player2});
}
