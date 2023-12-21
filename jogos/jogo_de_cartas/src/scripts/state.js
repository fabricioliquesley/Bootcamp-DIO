export const state = {
    score: {
        scoreBox: document.querySelector("#score-box"),
        playerScore: 0,
        enemyScore: 0
    },
    cardsSprites: {
        card: document.querySelector("#card-image"),
        name: document.querySelector("#card-name"),
        type: document.querySelector("#card-type"),
    },
    fieldCards: {
        player: document.querySelector("#player-field-card"),
        enemy: document.querySelector("#enemy-field-card")
    },
    playersSide: {
        player: "player-cards",
        playerBox : document.querySelector("#player-cards"),
        enemy: "enemy-cards",
        enemyBox : document.querySelector("#enemy-cards")
    },
    actions: {
        button: document.querySelector("#next-duel")
    }
}