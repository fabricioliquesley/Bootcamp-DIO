import { state } from "./state.js";
import { cardData } from "./cards.js";

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);

    return cardData[randomIndex].id;
}

async function drawSelectedCard(index) {
    state.cardsSprites.card.src = cardData[index].img;
    state.cardsSprites.name.textContent = cardData[index].name;
    state.cardsSprites.type.textContent = `Type: ${cardData[index].type}`;
}

async function removeAllCardsImages() {
    let { enemyBox, playerBox } = state.playersSide;

    let imgElements = enemyBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = playerBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);

    audio.volume = 0.05;
    audio.play();
}

async function checkDuelResults(playerCardId, enemyCardId) {
    let duelResults = "Empate";

    let playerCard = cardData[playerCardId];

    if (playerCard.WinOf.includes(enemyCardId)) {
        duelResults = "Ganhou";

        state.score.playerScore++;
        playAudio("win");
    } else if (playerCard.LoseOf.includes(enemyCardId)) {
        duelResults = "Perdeu"

        state.score.enemyScore++;
        playAudio("lose");
    }

    return duelResults;
}

async function resetDuel() {
    state.fieldCards.player.src = "";
    state.fieldCards.enemy.src = "";
    state.cardsSprites.card.src = "";
    
    state.cardsSprites.name.textContent = "Selecione uma";
    state.cardsSprites.type.textContent = "Carta";

    state.actions.button.style.display = "none";

    removeAllCardsImages();
    init();
}

async function drawButton(result) {
    let button = state.actions.button;

    button.textContent = result;
    button.style.display = "block";

    button.addEventListener("click", () => resetDuel());
}

async function updateScore() {
    let scoreBox = state.score.scoreBox;

    scoreBox.textContent = `wins: ${state.score.playerScore} | lose: ${state.score.enemyScore}`;
}

async function setCardsField(cardId) {
    await removeAllCardsImages();

    let enemyCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.enemy.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.enemy.src = cardData[enemyCardId].img;

    let duelResults = await checkDuelResults(cardId, enemyCardId);

    await updateScore();
    await drawButton(duelResults);
}

async function createCardImage(cardId, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "130px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", cardId);
    cardImage.classList.add("card");

    if (fieldSide === state.playersSide.player) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", () => {
            drawSelectedCard(cardId);
        });
    }

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
    drawCards(5, state.playersSide.player);
    drawCards(5, state.playersSide.enemy);
}

init();