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
    button: document.querySelector("next-duel")
}