import { state } from "./state.js";
import { cardData } from "./cards.js";

const playersSide = {
    player: "player-field-card",
    enemy: "enemy-field-card"
}

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);

    return cardData[randomIndex].id;
}

async function drawCards(cardsNumber, fieldSide) {
    for (let i = 0; i < cardsNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init() {
    drawCards(5, playersSide.player);
    drawCards(5, playersSide.enemy);
}

init();