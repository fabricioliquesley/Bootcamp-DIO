import { state } from "./state.js";
import { cardData } from "./cards.js";

const playersSide = {
    player: "player-cards",
    enemy: "enemy-cards"
}

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);

    return cardData[randomIndex].id;
}

async function drawSelectedCard(index){
    state.cardsSprites.card.src = cardData[index].img;
    state.cardsSprites.name.textContent = cardData[index].name;
    state.cardsSprites.type.textContent = `Type: ${cardData[index].type}`;
}

async function createCardImage(cardId, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "130px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", cardId);
    cardImage.classList.add("card");

    if (fieldSide === playersSide.player) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    cardImage.addEventListener("mouseover", () => {
        drawSelectedCard(cardId);
    });

    return cardImage;
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